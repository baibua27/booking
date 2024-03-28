require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const userrouter = require('./routes/user-route')
const roomrouter = require('./routes/room-route')
const reservationrouter  = require('./routes/reservation-route')
const paymentrouter  = require('./routes/payment-route')

const app = express()

app.use(cors())
app.use(express.json())

// service
app.use('/auth', authRoute)
app.use(userrouter)
app.use(roomrouter)
app.use(reservationrouter)
app.use(paymentrouter)

// notFound
app.use( notFound )

// error
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))