const { src, dest, } = require("gulp")


// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");


// Plugins
const gp = require("gulp-load-plugins")();
const htmlMin = require("gulp-htmlmin");
const gulpif = require("gulp-if");



// Handling HTML
const html = () => {
    return src(path.html.src)
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "HTML",
                message: error.message
            }))
        }))
        .pipe(gp.fileInclude())
        .pipe(gp.webpHtml())
        .pipe(gulpif(app.isProd, gp.size({ title: "До сжатия" })))
        .pipe(gulpif(app.isProd, htmlMin(app.htmlmin)))
        .pipe(gulpif(app.isProd, gp.size({ title: "После сжатия" })))
        .pipe(dest(path.html.dest));
}

module.exports = html;