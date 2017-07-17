exports.GetWorkAtRootForMember = function (req, res) {
    return res.json({
        message: "Hello from a public endpoint! You don't need to be authenticated to see this."
    });
};
exports.GetWorkDetails = function (req, res) {
    return res.json({
        message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
    });
};
exports.GetWorkAtRootForOrg = function (req, res) {
    return res.json({
        message: "Hello from a public endpoint! You don't need to be authenticated to see this."
    });
};
exports.Update = function (req, res) {
    return res.json({
        message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
    });
};
exports.Insert = function (req, res) {
    return res.json({
        message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
    });
};
exports.Delete = function (req, res) {
    return res.json({
        message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
    });
};
