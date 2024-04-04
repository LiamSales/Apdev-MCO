const Router = require('express');
const AccountRouter = Router();
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');

const Accounts = require('../models/Accounts.js')

AccountRouter.use(session({
    secret: 'secretKey', // Replace with your secret key
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1814400000
    }
}));

AccountRouter.post('/reg', async (req, res) => { // When the user is registering a new account
    try {
        const count = await Accounts.countDocuments();
        const nextUserId = count + 1;
        const saltRounds = 10;
        const plaintextPassword = req.body.password;

        bcrypt.hash(plaintextPassword, saltRounds, async function(err, hash) {
            if (err) {
                res.status(500);
            } else {
                try{
                    const newUser = await Accounts.create({
                        userID: nextUserId,
                        fullname: req.body.fullname,
                        username: req.body.username,
                        email: req.body.email,
                        password: hash,
                        type: req.body.type,
                        profilepicture: req.body.profilepicture,
                        bio: req.body.bio
                    });

                    res.status(200).json(newUser); 
                } catch (error) {
                    res.status(500);
                }
            }
        });

    } catch (error) {
        res.status(500);
    }
});

AccountRouter.post('/log', async (req, res) => { // When the user is loggin on
    try {
        const user = await Accounts.findOne({ username: req.body.username });
        
        if (!user){
            res.sendStatus(404);
        } else {
            bcrypt.compare(req.body.password, user.password, function(err, result){
                if(result){
                    req.session.userID = user.userID;
                    res.sendStatus(200);
                }
                else{
                    res.sendStatus(999);
                }
            });
            
        }

    } catch (error) {
        res.status(500).json({ message: 'Failed to find user', error: error.message });
    }
});

AccountRouter.post('/login', (req, res) => { // When the user is going to the login page
    res.json({ redirectTo: '/' });
});

AccountRouter.post('/register', async (req, res) => { // When the user is going to the register page
    res.json({ redirectTo: '/register' });
});

AccountRouter.post('/editprofile', async (req, res) => { // When the user is going to the register page
    res.json({ redirectTo: '/editprofile' });
});

AccountRouter.get('/editprofile', async (req, res) => { // When the user is going to the register page
    res.render("editprofile", {
        title: "Edit Profile"
    });
});

AccountRouter.get("/login", (req, res) => {
    res.render("login", {
        title: "Login Page"
    });
});

AccountRouter.get('/register', (req, res) => {
    res.render("register", {
        title: "Register Page"
    });
});


AccountRouter.post('/profile', async (req, res) => { // When the user is going to the register page
    res.json({ redirectTo: '/profile' });
});

AccountRouter.post('/logout', (req, res) => {
    // Destroy session to log out user
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Failed to log out' });
        }
        console.log("Logout successful")
    });
});

// ! TESTING BELOW REMOVE BEFORE PASSING

AccountRouter.get('/profile', (req, res) => {
    // Check if user is authenticated (i.e., session contains user ID)
    if (!req.session.userID) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // Retrieve user data based on user ID
    const user = Accounts.findOne({ userID: req.session.userID })
    .then(user => {
        if (user) {
          // User found
          res.render("editprofile", {
            title: "Testing",
            username: user.username,
            fullname: user.fullname,
            url: user.profilepicture
        });
        } else {
          // User not found
          console.log('User not found');
        }
      })
      .catch(error => {
        // Handle error
        console.error('Error finding user:', error);
      });


    
});


module.exports = AccountRouter;    