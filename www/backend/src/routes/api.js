import express from "express";
import projectsController from "../controllers/ProjectsController.js"
import skillsController from "../controllers/SkillsController.js"
import uploadHelper from "../helpers/projectFileHelper.js"
import validateSkillData from "../middlewares/validateSkillDataMiddleware.js";
import validateProjectData from "../middlewares/validateProjectDataMiddleware.js";
import homeController from "../controllers/HomeController.js";
const router = express.Router();

//////////////// Projects Routes start ////////////////
router.get('/projects',  projectsController.index);
router.post('/projects', uploadHelper.upload.single('image'), validateProjectData, projectsController.save);
router.get('/projects/:id', projectsController.edit);
router.put('/projects/:id', uploadHelper.upload.single('image'), validateProjectData, projectsController.update);
router.delete('/projects/:id', projectsController.destroy);
//////////////// Projects Routes end ////////////////

//////////////// Skills Routes start ////////////////
router.get('/skills',  skillsController.index);
router.post('/skills', validateSkillData, skillsController.save);
router.get('/skills/:id', skillsController.edit);
router.put('/skills/:id', validateSkillData, skillsController.update);
router.delete('/skills/:id', skillsController.destroy);
//////////////// Skills Routes end ////////////////

//////////////// Home Routes start ////////////////
router.get('/home',  homeController.index);
//////////////// Home Routes end ////////////////

export default router;