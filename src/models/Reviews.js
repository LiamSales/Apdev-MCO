const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;


const ReviewSchema = new Schema({
    user: { // Id of the Reviewer
        type: String,
        required: true
    },
    title: { // Title of the review
        type: String,
        required: true
    },
    name: { // Name of the restaurant
        type: String,
        required: true,
    },
    rating: { // 0 to 5 stars
        type: Number,
        required: true
    },
    review: { // The complete text of the review
        type: String,
        required: true
    },
    helpful: { // Amount who considers review helpful
        type: Number
    },
    unhelpful: { // Amount who considers review unhelpful
        type: Number
    }
});

const Reviews = model('Reviews', ReviewSchema); // users collection 

module.exports = Reviews;