import {Router} from 'express';
import authorize from "../middlewares/auth.middleware.js";
import {
    createSubscription,
    getUserSubscription
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'GET ALL subscriptions!'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'GET subscription details!'}));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/', (req, res) => res.send({title: 'UPDATE subscription!'}));

subscriptionRouter.delete('/', (req, res) => res.send({title: 'DELETE subscription!'}));

subscriptionRouter.get('/users/:id', authorize, getUserSubscription);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'CANCEL subscription!'}));

subscriptionRouter.put('/upcoming-renewals', (req, res) => res.send({title: 'GET upcoming renewals!'}));

export default subscriptionRouter;