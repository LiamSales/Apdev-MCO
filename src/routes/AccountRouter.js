const Router = require('express');
const AccountRouter = Router();

const AccountSchema = require('../models/Accounts.js')




AccountRouter.post('/register', (req, res) => {
    res.json({ redirectTo: '/register' });
});

AccountRouter.post('/login', (req, res) => {
    res.json({ redirectTo: '/' });
});

AccountRouter.get('/register', (req, res) => {
    res.render('register');
});




module.exports = AccountRouter;    