const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;


const RestaurantSchema = new Schema({
    reviewID: { // Id of the Review
        type: Number,
        required: true,
        unique: true
    },
    userID: { // Id of the Reviewer
        type: Number,
        required: true,
        unique: true
    },
    name: { // Name of the restaurant
        type: String,
        required: true,
        unique: true
    },
    rating: { // 0 to 5 stars
        type: Number,
        required: true
    },
    review: { // The complete text of the review
        type: String,
        required: true
    },
    title: { // Title of the review
        type: String,
        required: true
    },
    helpful: { // Amount who considers review helpful
        type: Number,
        required: true
    },
    unhelpful: { // Amount who considers review unhelpful
        type: Number,
        required: true
    }
});

const Restaurants = model('Reviews', RestaurantSchema); // users collection 

module.exports = Restaurants;