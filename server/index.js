require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const authCtrl = require('./controllers/authController')
const invCtrl = require('./controllers/inventoryController')

const app = express()

app.use(express.json())
app.use(
    session({
        resave:false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
        secret: SESSION_SECRET
    })
)

app.get('/auth/user', authCtrl.getUser)
app.get('/products', invCtrl.getInventory)
app.get('',)//product??
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/admin/product', invCtrl.addProduct)
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