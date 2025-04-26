import {Router} from 'express';
import {getUser, getUsers} from "../controllers/user.controllers.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', authorize, getUsers);

userRouter.get('/:id', authorize, getUser);
//this is why it's called the middleware because it is in the middle - after your starting of
//request and before you do the getUser (you next action)

userRouter.post('/', (req, res) => res.send({title: 'CREATE an user'}));

userRouter.put('/:id', (req, res) => res.send({title: 'UPDATE an user'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'DELETE an user'}));

export default userRouter;