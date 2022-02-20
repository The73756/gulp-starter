const { src, dest } = require("gulp")


// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");


//Плагины
const gp = require("gulp-load-plugins")();
const webpack = require("webpack-stream");


// Обработка JavaScript
const js = () => {
    return src(path.js.src, { sourcemaps: app.isDev })
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "JavaScript",
                message: error.message
            }))
        }))
        .pipe(gp.babel())
        .pipe(webpack(app.webpack))
        .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
}

module.exports = js;