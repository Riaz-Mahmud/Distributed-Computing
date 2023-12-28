import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/skills', (req, res) => {
    
    res.render('skills.ejs');
});

router.get('/projects', (req, res) => {
    res.render('projects.ejs');
});

// if url not foune then redirect to home page
router.get('*', (req, res) => {
    res.render('404.ejs');
});

export default router;