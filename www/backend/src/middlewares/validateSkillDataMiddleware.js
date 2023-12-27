// validateSkillDataMiddleware.js

function validateSkillData(req, res, next) {
    const { name, description } = req.body;

    // Validate that name and description are present
    if (!name || !description) {
        return res.status(400).json({
            status: 400,
            message: 'Please enter name and description',
        });
    }

    // If the data is valid, proceed to the next middleware or route handler
    next();
}

export default validateSkillData;
