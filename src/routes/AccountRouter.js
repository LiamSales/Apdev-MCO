const Router = require('express');
const AccountRouter = Router();

const Accounts = require('../models/Accounts.js')

const count = 1;


AccountRouter.post('/register', async (req, res) => { // When the user is going to the register page
    res.json({ redirectTo: '/register' });
});

AccountRouter.post('/reg', async (req, res) => { // When the user is registering a new account

    try {
        const count = await Accounts.countDocuments();
        const nextUserId = count + 1;

        const newUser = await Accounts.create({
            userID: nextUserId,
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        });


        
        res.send('User created successfully');
    } catch (error) {
        res.status(500).send('Error creating user: ' + error.message);
    }

});

AccountRouter.post('/log', async (req, res) => { // When the user is loggin on
    console.log('recived');
    
    try {
        const user = await Accounts.findOne({ 
            username: req.body.username
        });


        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            if(user.password === req.body.password) {
                res.sendStatus(200);
            } else {
                res.sendStatus(999);
            }
            
        }

    } catch (error) {
        res.status(500).json({ message: 'Failed to find user', error: error.message });
    }
});

AccountRouter.post('/login', (req, res) => { // When the user is going to the login page
    res.json({ redirectTo: '/' });
});

AccountRouter.get('/register', (req, res) => {
    res.render('register');
});




module.exports = AccountRouter;    