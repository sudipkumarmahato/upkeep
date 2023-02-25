import { Router } from "express"
import { getAllUsers, requestVendor } from "../controllers/user.controller.js"
import { verifyAdmin, useLogin } from "../middlewares/auth.js"
const usersRouter = Router()

/* GET users listing. */
usersRouter.get("/", useLogin, verifyAdmin, getAllUsers)
usersRouter.post("/vendor", useLogin, requestVendor)

export default usersRouter
