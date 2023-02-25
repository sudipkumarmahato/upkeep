import { Router } from "express"
import { createService, getServices } from "../controllers/service.controller.js"
import { useLogin, verifyVendor } from "../middlewares/auth.js"

const serviceRouter = Router()

serviceRouter.post("/", useLogin, verifyVendor, createService)
serviceRouter.get("/", getServices)

export default serviceRouter
