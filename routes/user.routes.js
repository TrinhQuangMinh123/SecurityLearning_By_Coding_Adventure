import {Router} from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({title: 'GET all users'}));

userRouter.get('/:id', (req, res) => res.send({title: 'GET user details'}));

userRouter.post('/', (req, res) => res.send({title: 'CREATE an user'}));

userRouter.put('/:id', (req, res) => res.send({title: 'UPDATE an user'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'DELETE an user'}));

export default userRouter;