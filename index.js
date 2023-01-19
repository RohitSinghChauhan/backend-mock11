const express = require('express');
require('dotenv').config();
const cors = require('cors');

const connection = require('./config/db');
const userRoute = require('./routes/users.route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send('Welcome to Homepage');
})

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log('Connected to Database');
    }
    catch (err) {
        console.log(err);
    }
    console.log(`Listening at ${process.env.PORT}`);
})