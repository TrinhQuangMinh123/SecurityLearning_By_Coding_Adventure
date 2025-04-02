import {Router} from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'GET ALL subscriptions!'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'GET subscription details!'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'CREATE subscription!'}));

subscriptionRouter.put('/', (req, res) => res.send({title: 'UPDATE subscription!'}));

subscriptionRouter.delete('/', (req, res) => res.send({title: 'DELETE subscription!'}));

subscriptionRouter.get('/users/:id', (req, res) => res.send({title: 'GET ALL users subscriptions!'}));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'CANCEL subscription!'}));

subscriptionRouter.put('/upcoming-renewals', (req, res) => res.send({title: 'GET upcoming renewals!'}));

export default subscriptionRouter;