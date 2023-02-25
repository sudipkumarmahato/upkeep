import asyncHandler from 'express-async-handler';
import { createError } from '../config/createError.js';
import Order from '../models/order.model.js';
import Service from '../models/service.model.js';
import { validObject } from '../utils/utils.js';
import Cart from '../models/cart.model.js';

export const orderService = asyncHandler(async (req, res, next) => {
    try {
        const { ids } = req.body;

        if (!ids) return next(createError('Invalid Request!', 400));
        Array.from(ids).every((item) => {
            if (!validObject(item))
                return res.status(400).send({ msg: 'Invalid request in id!' });
        });

        const orderAlreadyPlaced = await Order.findOne({ userId: req.user });

        const services = await Cart.find({
            cartItems: { $in: { serviceId: ids } },
        }).select('price _id');

        console.log(services);

        await Cart.findOne({ userId: req.user }).then(async (data) => {
            const cartedServices = await Service.find({
                _id: { $in: data.cartItems },
            });
            console.log(cartedServices);
        });

        // const cartedServices = await Cart.find({
        //     serviceId: { $in: cartItems },
        // });

        // console.log(cartedServices);
        return res.status(200).send({ msg: 'Order placed', cartedServices });

        if (!services || Array.isArray(services)?.length <= 0)
            return next(createError('Invalid Request', 403));

        let serviceId = [];
        services.map((i) => serviceId.push(i?._id));

        const total = services.reduce((acc, curr) => acc + curr?.price, 0);

        if (orderAlreadyPlaced) {
            // const { total: prevTotal, _id: ids } = await Order.find({
            //     userId: req.user,
            // }).select('total _id');
            // console.log(total);

            // const updatedOrder = await Order.findOneAndUpdate(
            //     { userId: req.user },
            //     {
            //         total: prevTotal + total,
            //         sid: { $addToSet: ids },
            //     },
            //     {
            //         new: true,
            //         runValidators: true,
            //     },
            // );
            // return res.status(200).send({
            //     msg: 'More item added to order successfully placed!',
            //     updatedOrder,
            // });

            return next(
                createError('Please wait until your last order placed !', 400),
            );
        } else {
            const newOrder = new Order({
                userId: req.user,
                services: serviceId,
                total,
            });
            await newOrder.save();
        }
        return res
            .status(200)
            .send({ msg: 'Order successfully placed!', newOrder });
    } catch (error) {
        next(error);
    }
});
