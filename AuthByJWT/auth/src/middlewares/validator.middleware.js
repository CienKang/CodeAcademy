const bodyValidator = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.message });
        } else {
            req.body = value;
            next();
        }
    };
};

module.exports = { bodyValidator } ;