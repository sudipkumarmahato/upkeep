import { Router } from 'express';
import {
    authActivate,
    authRegister,
    checkLogin,
    forgotPassword,
    logout,
    resetPassword,
    verifyLogin,
} from '../controllers/auth.controller.js';
import { useLogin } from '../middlewares/auth.js';

const authRouter = Router();

authRouter.get('/activate/:token', authActivate);
authRouter.post('/', authRegister);
authRouter.post('/login', verifyLogin);
authRouter.get('/logout', useLogin, logout);
authRouter.get('/status', useLogin, checkLogin);
authRouter.post('/forgot', forgotPassword);
authRouter.patch('/reset/:resetToken', resetPassword);

export default authRouter;
