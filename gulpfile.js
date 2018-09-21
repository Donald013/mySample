// Include gulp
var gulp = require('gulp');

//Plugin 
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Copy All HTML Files
gulp.task('copyHtml', function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// optimize Images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

// Minify JS
// gulp.task('minify', function(){
//     return gulp.src('src/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });

// Complie Scss
gulp.task('sass', function(){
    return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function(){
    return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['copyHtml','imageMin', 'sass', 'scripts']);

gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
});