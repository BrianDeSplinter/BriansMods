require('dotenv').config
const express = require('express')
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env
const authCtrl = require('./controllers/authController')
const invCtrl = require('./controllers/inventoryController')

const app = express()

app.use(express.json())

app.get('',)
app.get('',)
app.get('',)
app.post('',)
app.post('',)
app.post('',)
app.patch('',)
app.delete('',)
app.delete('',)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Connected to db')
    app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`))
}).catch(err => console.log(err))