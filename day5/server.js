const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000
const userRoute = require('./routes/userRoute')

app.use(express.json())


app.use('/users', userRoute)

app.listen(PORT,()=> {
    console.log(`Server runnig in port ${PORT}`)
})
