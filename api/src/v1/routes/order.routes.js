import { Router } from 'express';
import { orderService } from '../controllers/order.controller.js';
import { useLogin } from '../middlewares/auth.js';

const orderRouter = Router();

orderRouter.post('/', useLogin, orderService);

export default orderRouter;
