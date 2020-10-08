const express = require('express')
const mongoose = require('mongoose')

const app = express()


const url = 'mongodb://localhost/api'
    // ur

mongoose.connect(url, { useNewUrlParser: true })

const con = mongoose.connection


app.use(express.json())

const router = require('./router/app')

app.use('/api', router)



con.on('open', () => console.log('.....connected'))

app.listen(9000, () => console.log('....server started'))