import express from 'express';
import webRoutes from './routes/web.js';
import mongoose from 'mongoose';
import config from "../config.js";
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors
import cookieParser from 'cookie-parser';
import session from 'express-session';

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
    origin: '*', // Allow any origin during development
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    cors(corsOptions)(req, res, next);
});

app.use(cookieParser());
app.use(session({
    secret: '34SDglr223skolwczsx1578935RIAZER',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Set to true in a production environment with HTTPS
        maxAge: 7 * 24 * 60 * 60 * 1000 // Session duration is 7 days
    }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', webRoutes);

await connectToDB();

export default app;
