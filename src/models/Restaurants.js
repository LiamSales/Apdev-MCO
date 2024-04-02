const { SchemaTypes, Schema, model } = require('mongoose');

const RestaurantSchema = new Schema({
    name: { // Name of the restaurant
        type: SchemaTypes.String,
        required: true,
        unique: true
    },
    rating: { // X.XX 
        type: SchemaTypes.Number,
        required: true
    },
    owner: { // True or false
        type: SchemaTypes.Boolean,
        required: true
    }
});

const Restaurants = model('Restaurants', RestaurantSchema); // users collection 

module.exports = Restaurants;