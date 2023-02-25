import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

/**
 * Generates token
 * @function
 * @param {object} payload - Payload of the data.
 * @param {string} time - Time to expire.
 */
export const generateToken = (payload, time = '1hr') => {
    return jwt.sign(payload, process.env.AUTH_SECRET, {
        expiresIn: process.env.EXPIRES || time || '1d',
    });
};

export const verifyToken = (token, secret) => {
    try {
        const payload = jwt.verify(token, secret);
        return payload;
    } catch (err) {
        process.env.ENV == 'development' ? console.log(err) : null;
        return false;
    }
};

export const limitAndSkip = (query) => {
    let { page, size } = query;

    if (!page) page = 1;
    if (!size) size = 20;

    const limit = parseInt(size);
    const skip = (page - 1) * size;

    return [limit, skip];
};

export const validObject = (id) => mongoose.Types.ObjectId.isValid(id);
