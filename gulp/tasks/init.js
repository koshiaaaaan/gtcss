var gulp = require('gulp');
var del = require('del');
var config = require('../config');
var $ = require('gulp-load-plugins')();

var clean = function() {
  return del([
    config.dest + '/css/*'
  ])
};

gulp.task('clean', clean);
