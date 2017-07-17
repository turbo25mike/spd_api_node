exports.public = function (req, res) {
    return res.json({
        message: "Service Looking Good!"
    });
};
exports.environment = function (req, res) {
    return res.json({
        message: process.env.Environment || 'development'
    });
};
