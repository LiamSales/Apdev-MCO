import { SchemaTypes, Schema, model } from 'mongoose';

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
    owner: { // Owner of the restaurant
        
    }
});

const User = model('User', RestaurantSchema); // users collection 

export default User;
// module.exports = User;