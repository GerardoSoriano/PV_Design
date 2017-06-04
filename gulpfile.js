var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass-login','sass-photoviewer','sass-bootstrap','sass-bootstrap-grid','sass-bootstrap-reboot'], function() {

    browserSync.init({
        server: "./app"
    });

    //login
    gulp.watch("app/login/scss/**/*.scss", ['sass-login']);
    gulp.watch("app/login/scss/main.scss", ['sass-login']);
    gulp.watch("app/login/*.html").on('change', browserSync.reload);
    //photoviewer
    gulp.watch("app/photoviewer/scss/**/*.scss", ['sass-photoviewer']);
    gulp.watch("app/photoviewer/scss/main.scss", ['sass-photoviewer']);
    gulp.watch("app/photoviewer/*.html").on('change', browserSync.reload);
    //bootstrap
    gulp.watch("app/resources/libs/bootstrap/scss/**/*.scss", ['sass-bootstrap','sass-bootstrap-grid','sass-bootstrap-reboot']);
    gulp.watch("app/resources/libs/bootstrap/scss/*.scss", ['sass-bootstrap','sass-bootstrap-grid','sass-bootstrap-reboot']);
});

gulp.task('sass-login', function() {
    return gulp.src("app/login/scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/login/css"))
        .pipe(browserSync.stream());
});

gulp.task('sass-photoviewer', function() {
    return gulp.src("app/photoviewer/scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/photoviewer/css"))
        .pipe(browserSync.stream());
});

gulp.task('sass-bootstrap', function() {
    return gulp.src("app/resources/libs/bootstrap/scss/bootstrap.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/resources/libs/bootstrap/dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('sass-bootstrap-grid', function() {
    return gulp.src("app/resources/libs/bootstrap/scss/bootstrap-grid.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/resources/libs/bootstrap/dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('sass-bootstrap-reboot', function() {
    return gulp.src("app/resources/libs/bootstrap/scss/bootstrap-reboot.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/resources/libs/bootstrap/dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
