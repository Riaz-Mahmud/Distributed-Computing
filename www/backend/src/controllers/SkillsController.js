import Skill from '../models/Skill.js'

// get all skills
async function index(req, res, next){
    try{
        // get all Skills from database order by id desc
        const skills = await Skill.find().sort({ createdAt: 'desc' }).where('isDeleted', 0);
        return res.status(200).json({
            status: 200,
            message: "Skills retrieved successfully",
            data: skills
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

// create skill
async function save(req, res, next){
    try {

        const skill = new Skill();
        skill.name = req.body.name;
        skill.description = req.body.description;
        await skill.save();

        return res.status(201).json({
            status: 201,
            message: "Skill created successfully",
            data: req.body
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

// common function for edit, update and destroy methods for get skill by id
async function getSkillById(id) {
    try {
        const skill = await Skill.findById(id);
        if (!skill) {
            throw new Error('Skill not found');
        }
        return skill;
    } catch (error) {
        throw error;
    }
}


// edit skill
async function edit(req, res, next) {
    try {
        const skill = await getSkillById(req.params.id);
        return res.status(200).json({
            status: 200,
            message: 'Skill retrieved successfully',
            data: skill,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
        });
    }
}

// update skill
async function update(req, res, next) {
    try {
        const skill = await getSkillById(req.params.id);
        skill.name = req.body.name;
        skill.description = req.body.description;
        await skill.save();

        return res.status(200).json({
            status: 200,
            message: 'Skill updated successfully',
            data: skill,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
        });
    }
}

// delete skill
async function destroy(req, res, next) {
    try {
        const skill = await getSkillById(req.params.id);
        skill.isDeleted = 1;
        await skill.save();

        return res.status(200).json({
            status: 200,
            message: 'Skill deleted successfully',
            data: skill,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
        });
    }
}


export default {
    index:index,
    save:save,
    edit:edit,
    update:update,
    destroy:destroy
};