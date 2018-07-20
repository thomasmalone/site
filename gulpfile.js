
let gulp = require('gulp'),
pug = require('gulp-pug'),
sass = require('gulp-sass');
// livereload = require('gulp-livereload');

// set up our gulp file so we can compile sass on the fly.

gulp.task('sass', function () {

gulp.src(['src/**/*.scss'])

    .pipe(sass(
        { outputStyle: 'compressed' }
    ))
    .pipe(gulp.dest('dist'))

//     function (f) {
//     return f.base;
//     return '/static/css'
// }))

});

// TODO: Add other html files.
gulp.task('pug', function () {

return gulp.src(['src/**/*.pug'])

    .pipe(pug({
        
        // Your options in here.

    }))

    .pipe(gulp.dest('dist'))

});

gulp.task('default', ['sass'], function () {

    gulp.watch(['**/*.scss', '**/*.pug'], ['sass', 'pug']);

})
