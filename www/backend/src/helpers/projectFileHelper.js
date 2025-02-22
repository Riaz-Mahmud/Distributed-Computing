'use strict';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.resolve(), '/src/storage/projects/'));
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg'
        || file.mimetype === 'image/jpeg' || file.mimetype === 'image/gif' 
        || file.mimetype === 'image/svg+xml' || file.mimetype === 'image/webp') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter });

export default { upload }