import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'user Required'],
        ref: 'User',
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Category Required'],
        ref: 'Category',
    },
    title: {
        type: String,
    },
    desc: String,
    image: [String],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    users: [mongoose.Schema.Types.ObjectId],
    views: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    itemInStock: {
        type: Number,
    },
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
