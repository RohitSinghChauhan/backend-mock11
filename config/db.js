const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

const connection = mongoose.connect(process.env.BASE_URL);

module.exports = connection;