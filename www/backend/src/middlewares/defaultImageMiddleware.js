// defaultImageMiddleware.js

import express from 'express';
import path from 'path';
import fs from 'fs';

const defaultImageMiddleware = express.Router();

defaultImageMiddleware.use((req, res, next) => {
    const storagePath = path.join(path.resolve(), '/src/storage/');
    const requestedFilePath = path.join(storagePath, req.url);

    // Check if the requested file exists
    fs.access(requestedFilePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File does not exist, redirect to default image
            const defaultImagePath = '/default/no_data_found.png';
            return res.sendFile(path.join(storagePath, defaultImagePath));
        }

        // File exists, continue with the static file middleware
        next();
    });
});

export default defaultImageMiddleware;
