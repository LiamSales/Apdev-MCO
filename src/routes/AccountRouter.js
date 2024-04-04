const Router = require('express');
const AccountRouter = Router();
const bcrypt = require('bcryptjs'); 
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

const Accounts = require('../models/Accounts.js')

const count = 1;


AccountRouter.post('/register', async (req, res) => { // When the user is going to the register page
    res.json({ redirectTo: '/register' });
});

AccountRouter.post('/reg', upload.single('profilePicture'), async (req, res) => { // When the user is registering a new account
    const profilePicturePath = req.body.profilePicture;
    console.log(profilePicturePath);
    // try {
    //     const count = await Accounts.countDocuments();
    //     const nextUserId = count + 1;
    //     const saltRounds = 10;
    //     const plaintextPassword = req.body.password;

    //     bcrypt.hash(plaintextPassword, saltRounds, async function(err, hash) {
    //         if (err) {
    //             res.status(500);
    //         } else {
    //             try{
    //                 const newUser = await Accounts.create({
    //                     userID: nextUserId,
    //                     fullname: req.body.fullname,
    //                     username: req.body.username,
    //                     email: req.body.email,
    //                     password: hash,
    //                     type: req.body.type,
    //                     profilepicture: req.file ? req.file.path : '',
    //                     bio: req.body.bio
    //                 });

    //                 res.status(200).json(newUser); 
    //             } catch (error) {
    //                 res.status(500);
    //             }
    //         }
    //     });

    // } catch (error) {
    //     res.status(500);
    // }

});

AccountRouter.post('/log', async (req, res) => { // When the user is loggin on
    try {
        const user = await Accounts.findOne({ username: req.body.username });
        
        if (!user){
            res.sendStatus(404);
        } else {
            const givenpass = req.body.password;
            bcrypt.compare(givenpass, user.password, function(err, result){
                if(result){
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




module.exports = AccountRouter;    