var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var flexibility = require('postcss-flexibility');
var config = require('../config');
var $ = require('gulp-load-plugins')();

var styles = function() {
  return gulp.src(config.src + '/sass/**/!(_)*.{scss,sass}')
    .pipe($.sassGlob())
    .pipe($.sass(config.sassOptions).on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer(),
      flexibility(),
    ]))
    .pipe(gulp.dest(config.dest + '/css'));
};

gulp.task('styles', styles);