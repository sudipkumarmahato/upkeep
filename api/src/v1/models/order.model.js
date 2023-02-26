import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        services: [{ sid: mongoose.Schema.Types.ObjectId }],
        total: {
            type: Number,
            required: true,
            min: [200, 'Too few Price!'],
        },
        status: {
            type: String,
            enum: {
                values: ['pending', 'inprogress', "completed"],
                message: 'Value error, Invalid Request !',
            },
            default: 'pending',
        },
    },
    {
        timestamps: true,
    },
);

const Order = mongoose.model('Order', OrderSchema);

export default Order;
