require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const env = require('dotenv').config({path: '../.env'})
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { resolve } = require("path");

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, STATIC_DIR} = process.env
const authCtrl = require('./controllers/authController')
const invCtrl = require('./controllers/inventoryController')
const ordCtrl = require('./controllers/orderController')
const crtCtrl = require('./controllers/cartController')

const app = express()
app.use(express.static(`$(__dirname)/../build`))

app.use(express.static(process.env.STATIC_DIR))
app.use(express.json())

app.use(
    session({
        resave:false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
        secret: SESSION_SECRET
    })
)
//------stripe
app.get("/", (req, res) => {
    // Display checkout page
    const path = resolve(process.env.STATIC_DIR + "/index.html");
    res.sendFile(path);
  });
  
  app.get("/stripe-key", (req, res) => {
    res.send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
  });
  
  const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // You should always calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };
  
  app.post("/pay", async (req, res) => {
    const { paymentMethodId, paymentIntentId, items, currency, useStripeSdk } = req.body;
  
    const orderAmount = calculateOrderAmount(items);
  
    try {
      let intent;
      if (paymentMethodId) {
        // Create new PaymentIntent with a PaymentMethod ID from the client.
        intent = await stripe.paymentIntents.create({
          amount: orderAmount,
          currency: currency,
          payment_method: paymentMethodId,
          confirmation_method: "manual",
          confirm: true,
          // If a mobile client passes `useStripeSdk`, set `use_stripe_sdk=true`
          // to take advantage of new authentication features in mobile SDKs
          use_stripe_sdk: useStripeSdk,
        });
        // After create, if the PaymentIntent's status is succeeded, fulfill the order.
      } else if (paymentIntentId) {
        // Confirm the PaymentIntent to finalize payment after handling a required action
        // on the client.
        intent = await stripe.paymentIntents.confirm(paymentIntentId);
        // After confirm, if the PaymentIntent's status is succeeded, fulfill the order.
      }
      res.send(generateResponse(intent));
    } catch (e) {
      // Handle "hard declines" e.g. insufficient funds, expired card, etc
      // See https://stripe.com/docs/declines/codes for more
      res.send({ error: e.message });
    }
  });
  
  const generateResponse = intent => {
    // Generate a response based on the intent's status
    switch (intent.status) {
      case "requires_action":
      case "requires_source_action":
        // Card requires authentication
        return {
          requiresAction: true,
          clientSecret: intent.client_secret
        };
      case "requires_payment_method":
      case "requires_source":
        // Card was not properly authenticated, suggest a new payment method
        return {
          error: "Your card was denied, please provide a new payment method"
        };
      case "succeeded":
        // Payment is complete, authentication not required
        // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
        console.log("💰 Payment received!");
        return { clientSecret: intent.client_secret };
    }
  };

//------


app.get('/auth/user', authCtrl.getUser)
app.get('/products', invCtrl.getInventory)
app.get('/product/:id',invCtrl.getProduct)
app.get('/cart', crtCtrl.getCart)
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/admin/product', invCtrl.addProduct)
app.post('/order/items', ordCtrl.addItems)
app.post('/order', ordCtrl.addOrder)
app.post('/cart', crtCtrl.addCart)
app.put('/admin/product/:id', invCtrl.updateProduct)
app.delete('/auth/logout', authCtrl.logout)
app.delete('/admin/product/:id', invCtrl.deleteProduct)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Connected to db')
    app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`))
}).catch(err => console.log(err))