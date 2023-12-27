// validateProjectDataMiddleware.js

function validateProjectData(req, res, next) {

    if (!req.body.name || !req.body.techstack || !req.body.description) {
        return res.status(400).json({
            status: 400,
            message: 'Please provide a name, techstack and description for the project'
        });
    }

    if(req.body.link){
        const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(req.body.link);
        if (!validURL) {
            return res.status(400).json({
                status: 400,
                message: 'Please provide a valid URL for the project link'
            });
        }
    }

    // If the data is valid, proceed to the next middleware or route handler
    next();
}

export default validateProjectData;
