import Cart from '../models/cart.model.js';
import Service from '../models/service.model.js';
import { validObject } from '../utils/utils.js';

export const addCartItems = async (req, res, next) => {
    try {
        const id = req.body?.id || req.params?.id;

        if (!id) return res.status(400).send({ msg: 'Invalid Request' });

        if (!validObject(id))
            return res.status(400).send({ msg: 'Invalid Object' });

        const isService = await Service.findById(id);

        if (!isService)
            return res.status(404).send({ msg: 'No service found 🚀' });

        const previousCart = await Cart.findOne({ userId: req.user });

        if (previousCart) {
            const updatedCart = await Cart.findOneAndUpdate(
                { userId: req.user },
                {
                    $push: { cartItems: { serviceId: id } },
                    $inc: { cartQuantity: 1, totalPrice: isService?.price },
                },
                {
                    new: true,
                    runValidators: true,
                },
            );

            return res
                .status(200)
                .send({ msg: 'Another service added to Cart', updatedCart });
        } else {
            const createdCart = new Cart({
                userId: req.user,
                cartItems: [{ serviceId: id }],
                // serviceQuantity: [{ id: [id], quantity: 1 }],
                totalPrice: isService.price,
            });
            await createdCart.save();
            return res
                .status(200)
                .send({ msg: 'Service added to cart!', createdCart });
        }
    } catch (error) {
        console.log('error');
        throw error;
    }
};
