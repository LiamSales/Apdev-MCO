const { SchemaTypes, Schema, model } = require('mongoose'); 

const AccountSchema = new Schema({
    userID: {
        type: SchemaTypes.Number,
        required: true,
        unique: true
    },
    username: {
        type: SchemaTypes.String,
        required: true,
        trim: true,
        unique: true
    },
    owner: { // False = Reviewer || True = Restaurant Owner
        type: SchemaTypes.Boolean,
        required: true
    },
    email: { // X@X.X
        type: SchemaTypes.String,
        required: true,
        trim: true,
        unique: true
    },
    password: { 
        type: SchemaTypes.String,
        required: true,
    },
    fullname: {
        type: SchemaTypes.String,
        required: true
    }

});

const Accounts = model('Accounts', AccountSchema);

module.exports = Accounts;