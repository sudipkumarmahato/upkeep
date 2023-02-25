import mongoose, { mongo } from 'mongoose';

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        cartItems: [
            {
                serviceId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Service',
                },
            },
        ],
        cartQuantity: {
            type: Number,
            min: [0, 'Invalid Value!'],
            default: 1,
        },
        // serviceQuantity: [
        //     {
        //         id: [mongoose.Schema.Types.ObjectId],
        //         quantity: {
        //             type: Number,
        //             default: 0,
        //         },
        //         select: false,
        //     },
        // ],
        totalPrice: Number,
    },
    {
        timestamps: true,
    },
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
