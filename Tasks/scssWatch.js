const gulp = require('gulp');
const config = require('../package').gulp;

const scssWatch = () => {
    gulp.watch([
        `${config.src.scss}/${config.selectors.scss}`, `${config.src.cshtml}/${config.selectors.cshtml }`
    ], ['scssBuild']);
};

gulp.task('scssWatch', scssWatch);
module.exports = scssWatch;