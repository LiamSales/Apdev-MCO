// import userRouter from './usersRouter.js';
// import postsRouter from './postsRouter.js';

const Router = require('express');
const AccountRouter = require('./AccountRouter.js');
// const RestaurantRouter = require('./RestaurantsRouter.js');
const router = Router();

router.get("/", (req, res) => {
    res.render("login");
});

router.use(AccountRouter);




module.exports = router;