exports.getPath = url => require("path").join(__dirname, '..', ...url.split('/'));
