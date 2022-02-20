const del = require("del");

// Configuration
const path = require("../config/path.js");

// Removing a directory
const clear = () => {
    return del(path.root);
}

module.exports = clear;