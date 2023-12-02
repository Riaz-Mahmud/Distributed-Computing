import express from 'express';
import productRoutes from './routes/products.js';
import mongoose from 'mongoose';
import config from "../config.js";
import bodyParser from 'body-parser';
import cors from 'cors';  // Import cors

const connectToDB = async () => {
    try {
        await mongoose.connect(config.db_uri, {})
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

const app = express();

// Middleware
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
app.use(cors(corsOptions));  // Use cors middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', productRoutes);

await connectToDB();

export default app;
