const { src, dest } = require("gulp")


// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");


// Plugins
const gp = require("gulp-load-plugins")();
const gulpif = require("gulp-if");


// Handling Image
const img = () => {
    return src(path.img.src)
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "Image",
                message: error.message
            }))
        }))
        .pipe(gp.newer(path.img.dest))
        .pipe(gp.webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(gp.newer(path.img.dest))
        .pipe(gulpif(app.isProd, gp.imagemin(app.imagemin)))
        .pipe(dest(path.img.dest));
}

module.exports = img;