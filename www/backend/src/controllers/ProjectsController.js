import Project from '../models/Project.js'

async function index(req, res, next){
    try{
        // get all Projects from database order by id desc
        const projects = await Project.find().sort({ createdAt: 'desc' }).where('isDeleted', false);
        for(let i = 0; i < projects.length; i++){
            if(projects[i].image == null || projects[i].image == ''){
                projects[i].image = 'storage/default/no_data_found.png';
            }
        }
        return res.status(200).json({
            status: 200,
            message: "Projects retrieved successfully",
            data: projects
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

async function save(req, res, next){
    try {
        const project = new Project();
        project.name = req.body.name;
        project.techstack = req.body.techstack;
        project.description = req.body.description;
        project.link = req.body.link;
        
        if (req.file) {
            project.image = 'storage/projects/' + req.file.filename;
        }
        await project.save();

        return res.status(201).json({
            status: 201,
            message: "Project created successfully",
            data: req.body
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

async function getProjectById(id) {
    try {
        const project = await Project.findById(id);
        if (!project) {
            throw new Error('Project not found');
        }
        return project;
    } catch (error) {
        throw error;
    }
}

async function edit(req, res, next) {
    try {
        const project = await getProjectById(req.params.id);
        return res.status(200).json({
            status: 200,
            message: "Project retrieved successfully",
            data: project
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function update(req, res, next) {
    try {
        const project = await getProjectById(req.params.id);
        project.name = req.body.name;
        project.techstack = req.body.techstack;
        project.description = req.body.description;
        project.link = req.body.link;
        if (req.file) {
            project.image = 'storage/projects/' + req.file.filename;
        }
        await project.save();

        return res.status(200).json({
            status: 200,
            message: "Project updated successfully",
            data: project
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function destroy(req, res, next) {
    try {
        const project = await getProjectById(req.params.id);
        project.isDeleted = true;
        await project.save();

        return res.status(200).json({
            status: 200,
            message: "Project deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
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