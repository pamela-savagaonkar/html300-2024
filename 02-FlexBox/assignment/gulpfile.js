const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src("css/style.scss") // Adjusted path to match your directory structure
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("css")) // Outputs to the same directory, css/
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("css/*.scss", gulp.series('sass')); // Adjusted path
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'serve'));