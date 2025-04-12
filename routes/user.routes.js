import {Router} from 'express';
import {getUser, getUsers} from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', (req, res) => res.send({title: 'CREATE an user'}));

userRouter.put('/:id', (req, res) => res.send({title: 'UPDATE an user'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'DELETE an user'}));

export default userRouter;