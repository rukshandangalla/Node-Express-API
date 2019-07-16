module.exports = (error, req, res, next) => {
    const status = error.statsCode || 500;
    const message = error.message;
    const data = error.data;
    const validation = error.validation;
    
    res.status(status).json({
        message,
        data,
        validation
    });
};