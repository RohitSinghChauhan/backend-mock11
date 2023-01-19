const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/users.model');

const userRoute = Router();

userRoute.get('/', (req, res) => {
    res.send('Welcome user');
});

userRoute.post('/signup', async (req, res) => {
    try {
        res.send('Please sign up now!');
    }
    catch (err) {
        res.send('something isnt good');
    }
});

userRoute.post('/login', async (req, res) => {
    try {
        res.send('Please log in now!');
    }
    catch (err) {
        res.send('something isnt good');
    }
});

module.exports = userRoute;