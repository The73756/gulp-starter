const { src, dest } = require("gulp")


// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");


// Plugins
const gp = require("gulp-load-plugins")();


// Handling Font
const font = () => {
    return src(path.font.src)
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "Font",
                message: error.message
            }))
        }))
        .pipe(gp.newer(path.font.dest))
        .pipe(gp.fonter(app.fonter))
        .pipe(dest(path.font.dest))
        .pipe(gp.ttf2woff2())
        .pipe(dest(path.font.dest));

}

module.exports = font;