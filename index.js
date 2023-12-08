import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from "./routes/user.js";

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/user', userRoutes)

// default route
app.get('/', (req, res) => {
    res.send('<h1>Wellcome to soultrain API</h1> <p>Start by accessing /user/allUsers API</p>');
});

// connection URL for mongoBD atlas(cloud database)
const CONNECTION_URL = 'mongodb+srv://ruvikperera:abcd1234@soultrain.c8ddrij.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.PORT || 8080

// make the conection to the databse and start the server
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error))