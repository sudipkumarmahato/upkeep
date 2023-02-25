import { Router } from 'express';
import { addCartItems } from '../controllers/cart.controller.js';
import { useLogin } from '../middlewares/auth.js';

const cartRouter = Router();

cartRouter.post('/add/:id', useLogin, addCartItems);

export default cartRouter;
