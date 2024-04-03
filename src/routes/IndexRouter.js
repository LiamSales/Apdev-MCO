// import userRouter from './usersRouter.js';
// import postsRouter from './postsRouter.js';

const Router = require('express');
const AccountRouter = require('./AccountRouter.js');
// const RestaurantRouter = require('./RestaurantsRouter.js');
const router = Router();

router.get("/", (req, res) => {
    res.render("login", {
        title: "Login Page"
    });
});


router.get("/reviews", (req, res) => {
    res.render("reviews", {
        title: "Buyerview Search"
    });

});

AccountRouter.post('/loginSuccess', (req, res) => { // When the user is going to the login page
    res.json({ redirectTo: '/reviews' });
});

AccountRouter.post('/registerSuccess', (req, res) => { // When the user is going to the login page
    res.json({ redirectTo: '/login' });
});

router.use(AccountRouter);




module.exports = router;