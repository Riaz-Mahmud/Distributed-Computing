import Project from '../models/Project.js'
import Skill from '../models/Skill.js'

async function index(req, res, next){
    try {
        const skills = await Skill.find().where('isDeleted', false);
        const projects = await Project.find().where('isDeleted', false);
        return res.status(200).json({
            status: 200,
            message: "Home data retrieved successfully",
            data: {
                skills: skills.length,
                projects: projects.length
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export default {
    index:index
}