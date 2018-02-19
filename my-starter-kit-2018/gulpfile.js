var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
// const concat = require('gulp-concat')
// const babel = require('gulp-babel')
// const watch = require('gulp-watch')
var browserSync = require('browser-sync');
var reload = browserSync.reload;
// var shell = require('gulp-shell')


gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./public/css'))
      .pipe(browserSync.stream())
  });
gulp.task('browser-sync', function(){
  browserSync.init({
    server: './public',
    notify: false,
    open: true
  })
})

gulp.task('default', ['sass', 'browser-sync'], function(){
  gulp.watch('./src/scss/**/*', ['sass'])
})
