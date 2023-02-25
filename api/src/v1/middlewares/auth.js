import { createError } from "../config/createError.js"
import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const useLogin = async (req, res, next) => {
	try {
		const { accesstoken: token } =
			req.cookies ?? req.body ?? req.headers["Authorization"] ?? req.headers["x-access-token"]

		if (!token) return next(createError("Unauthorized !", 403))
		const accesstoken = token.split(" ")[1]
		if (!accesstoken) return next(createError("Unauthorized !", 403))

		jwt.verify(accesstoken, process.env.SECRETTOKEN, async (err, res) => {
			if (err) throw err
			const role = await User.findById(res.id).select("role")
			if (role == null) return next(createError("Unauthorized !", 403))
			req.user = res.id
			req.role = role.role
			next()
		})
	} catch (error) {
		next(error)
	}
}

export const verifyVendor = async (req, res, next) => {
	try {
		const role = req.role
		if (!role) return next(createError("Vendor access denied !", 403))
		if (role == 0) return next(createError("Vendor access denied!", 400))
		if (role == 2) return next(createError("Admin cannot access vendor permission!", 400))

		if (role == 1) {
			return next()
		}
		return next(createError("Vendor access denied !", 403))
	} catch (error) {
		next(error)
	}
}

export const verifyAdmin = async (req, res, next) => {
	try {
		const role = req.role
		if (!role) return next(createError("Admin access denied !", 403))

		if (role == 2) {
			next()
		} else {
			next(createError("Admin access denied !", 403))
		}
	} catch (error) {
		next(error)
	}
}
