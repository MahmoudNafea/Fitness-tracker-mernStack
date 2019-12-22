const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB connected successfully')
})