import express from 'express';
import apiRoutes from './routes/api.js';
import webRoutes from './routes/web.js';
import mongoose from 'mongoose';
import config from "../config.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import sessionStore from './helpers/session.js';
import defaultImageMiddleware from './middlewares/defaultImageMiddleware.js';
const store = new session.MemoryStore();
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const connectToDB = async () => {
    try {
        await mongoose.connect(config.db_uri, {})
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "views"));

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
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000 // Session duration is 1 days
    },
    // store: sessionStore,
    store,
}));

// Global middleware to set session_id if not already set
app.use((req, res, next) => {
    next();
});

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


app.use('/storage', express.static(path.join(path.resolve(), '/src/storage/')));
// default image middleware
app.use('/storage', defaultImageMiddleware);

// Routes
app.use('/api', apiRoutes);
app.use(webRoutes);

await connectToDB();

export default app;
