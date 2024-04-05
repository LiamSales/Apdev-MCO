const Router = require('express');
const Reviews = require('../models/Reviews.js');

const createReviewRouter = Router();

createReviewRouter.post('/createreview', async (req, res) => {

    try{
        req.body.user = "user1";
        req.body.name = "resto1";

        const result = await Reviews.create({
            user: req.body.user,
            title: req.body.title,
            name: req.body.name,
            rating: req.body.rating,
            review: req.body.review
        })

        console.log(result);
        res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
})

createReviewRouter.get('/createreview', async (req, res) =>{
    res.render("createreview");
})

module.exports = createReviewRouter;