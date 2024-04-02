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
    owner: { // Name of the owner
        type: SchemaTypes.String,
        required: true
    }
});

const Restaurants = model('Restaurants', RestaurantSchema); // users collection 

module.exports = Restaurants;