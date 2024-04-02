const { SchemaTypes, Schema, model } = require('mongoose'); 

const AccountSchema = new Schema({
    userID: { // XXXX || 0000
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
    type: { // Reviewer or Restaurant Owner
        type: SchemaTypes.String,
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
    }

});

const Accounts = model('Accounts', AccountSchema);

module.exports = Accounts;