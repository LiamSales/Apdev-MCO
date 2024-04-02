const AccountSchema = require('../src/models/Accounts.js');
const RestaurantSchema = require('../src/models/Restaurants.js');
require('dotenv').config();
const mongoose = require('mongoose');




async function initialize() {
    try {
        await mongoose.connect('mongodb://localhost:27017/'+ process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = initialize;