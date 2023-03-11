import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        role: {
            type: Number,
            default: 0, // 0 - simple user, 1 - vendor , 2 - admin
            select: false,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        confirmPassword: {
            type: String,
            required: true,
            select: false,
        },
        vendorAccess: {
            type: Boolean,
            default: false,
        },
        phone: String,
        address: {
            type: String,
            required: true,
            trim: true,
        },
        business_address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address',
        },
    },
    {
        timestamps: true,
    },
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});
const User = mongoose.model('User', userSchema);

export default User;
