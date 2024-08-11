const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const paths = {
    scss: { src: './css/*.scss', dest: './css' }
};

// Compile SCSS into CSS
function sassTask() {
    return gulp.src(paths.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream());
}

// Watch SCSS files and compile them on change
function watchFiles() {
    gulp.watch(paths.scss.src, sassTask);
}

// Default Gulp task
exports.default = gulp.series(sassTask, watchFiles);