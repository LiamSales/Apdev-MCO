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
    type: { // Reviewer || Restaurant Owner
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
    },
    fullname: {
        type: SchemaTypes.String,
        required: true
    }

});

AccountSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next();
    }
    
    try {
        const count = await this.constructor.countDocuments();
        this.userId = count + 1;
    } catch (error) {
        return next(error);
    }
});

const Accounts = model('Accounts', AccountSchema);

module.exports = Accounts;