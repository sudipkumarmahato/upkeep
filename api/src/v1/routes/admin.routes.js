import { Router } from "express"
import {
	approveOrRejectVendors,
	createCategory,
	getCategories,
	getPendingVendors,
} from "../controllers/admin.controller.js"
import { verifyAdmin, useLogin } from "../middlewares/auth.js"

const adminRouter = Router()

adminRouter.post("/category", useLogin, verifyAdmin, createCategory)
adminRouter.get("/category", getCategories)
adminRouter.get("/pending_vendors", getPendingVendors)
adminRouter.patch("/vendor", useLogin, verifyAdmin, approveOrRejectVendors)

export default adminRouter
