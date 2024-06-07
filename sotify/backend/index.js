require('dotenv').config()
require('./dbconfig/createtables')

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const router = require('./router/router')

const app = express()
const PORT = process.env.PORT || 5001

app.use(bodyParser.json({
    limit: '3mb'
}))
app.use(bodyParser.urlencoded({ limit: "3mb", extended: true, parameterLimit: 10 }))
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}))

app.use('/api', router)

const start = async () => {
    try {
        await app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

