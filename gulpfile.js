var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var merge = require('merge-stream');

var appjs = [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/angular/angular.js',
    './bower_components/angular-animate/angular-animate.js',
    './bower_components/angular-material/angular-material.js',
    './bower_components/jquery-ui/jquery-ui.js',
    './bower_components/angular-ui-sortable/sortable.js',
    './app/app.js',
    './app/shared/directives/**/*.js',
    './app/shared/services/**/*.js',
    './app/**/*.js'
];

var appcss = [
    './bower_components/angular/angular-csp.css',
    './app/**/**/**/*.css'
];


gulp.task('js', function() {
    gulp.src(appjs, { base: './bower_components/' })
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('css', function() {

    var cssStream = gulp.src(appcss)
        .pipe(minifyCSS())
        .pipe(concat('css-files.css'));

    var scssStream = gulp.src('./app/app.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(concat('sass-files.scss'));

    var mergedStream = merge(scssStream, cssStream)
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('dist'));

    return mergedStream;

});


gulp.task('watch', function() {

    gulp.watch(appjs, function() {
        gulp.run('js');
    });

    gulp.watch(appcss, function() {
        gulp.run('css');
    });

    gulp.watch('./app/**/**/**/*.scss', function() {
        gulp.run('css');
    });
});


gulp.task('default', ['js', 'css', 'watch']);
