import app from '../app.js';
import http from 'http';
import mongoose from 'mongoose';
import { MONGO_URI } from '../store.js';

const port = process.env.PORT || 8000;
mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGOURI || MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        http.createServer(app).listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    });
