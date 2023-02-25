import { createError } from "../config/createError.js"
import VendorRequest from "../models/request.model.js"
import User from "../models/user.model.js"
import { limitAndSkip } from "../utils/utils.js"

export const getAllUsers = async (req, res, next) => {
	try {
		const [limit, skip] = limitAndSkip(req.query)

		const users = await User.find()
			.sort({
				createdAt: -1,
			})
			.limit(limit)
			.skip(skip)

		return res.json(users)
	} catch (error) {
		next(error)
	}
}

export const updateUser = async (req, res, next) => {
	try {
	} catch (error) {
		next(error)
	}
}

export const requestVendor = async (req, res, next) => {
	try {
		const alreadyInPending = await VendorRequest.findOne({
			user: req.user,
		})

		if (alreadyInPending) return next(createError("Pending Approval!", 400))
		if (req.role == 1 || req.role == 2) return next(createError("You already a vendor! ", 400))
		await new VendorRequest({
			user: req.user,
		}).save()
		return res.status(200).send({ msg: "Request in Pending!" })
	} catch (error) {
		console.log(error)
		next(error)
	}
}
