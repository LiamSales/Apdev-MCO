import { Router } from 'express';

import mongoose from 'mongoose';
import Accounts from '../models/Accounts.js';
import Restaurants from '../models/Restaurants.js';
import Reviews from '../models/Reviews.js';

const createReviewRouter = Router();

createReviewRouter.post("/reviews", async (req, res) => {
    try{
        const result = await Reviews.create({
            user: req.body.user,
            title: req.body.title,
            name: req.body.name,
            rating: req.body.rating,
            review: req.body.review
        })
    }catch(err){
        console.log(err);
    }
})

module.exports = createReviewRouter;