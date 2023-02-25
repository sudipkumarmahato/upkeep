import asyncHandler from 'express-async-handler';
import { createError } from '../config/createError.js';
import Category from '../models/category.model.js';
import VendorRequest from '../models/request.model.js';
import User from '../models/user.model.js';
import { limitAndSkip } from '../utils/utils.js';

/* Creating a category. */
export const createCategory = asyncHandler(async (req, res, next) => {
    const { name, icon, color } = req.body;

    console.log(req.user);

    if (!name || !icon || !color)
        return next(createError('Please enter all fields !', 400));

    const cat = await Category.create({
        name,
        icon,
        color,
    });

    return res.status(200).send(cat);
});

export const getCategories = asyncHandler(async (req, res, next) => {
    return res.status(200).send(await Category.find());
});

export const getPendingVendors = asyncHandler(async (req, res, next) => {
    const [limit, skip] = limitAndSkip(req.query);

    return res.status(200).send(
        await VendorRequest.find().populate({
            path: 'user',
            select: '+role',
        }),
    );
});

export const approveOrRejectVendors = asyncHandler(async (req, res, next) => {
    const { action, id } = req.query;
    if (action == 'true') {
        const data = await VendorRequest.findById(id).populate({
            path: 'user',
            select: '+role',
        });
        if (!!!data)
            return next(createError('No such request found for vendor!', 403));
        const { _id, user } = data;
        const { _id: userId } = user;

        const updateduser = await User.findByIdAndUpdate(
            { _id: userId },
            {
                role: 1,
                vendorAccess: true,
            },
            {
                new: true,
                runValidators: true,
            },
        );

        if (updateduser) {
            await VendorRequest.findByIdAndDelete(_id);
            // send mail that you have been approved as the vendor
            return res.status(200).send({
                msg: 'Vendor approved, congratulations for becoming vendor!',
            });
        } else {
            const err = new Error();
            return next(err);
        }
    } else if (action == 'false') {
        // send mail that it's rejected
        await VendorRequest.findByIdAndDelete(id);
        res.status(451).send({ msg: 'Rejected for vendor!' });
    } else {
        return next(
            createError('Invalid request, please provide action.', 403),
        );
    }
});
