var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();

var watchFn = function() {
  return $.watch([
    config.src + '/sass/**/*.{scss,sass}'
  ], function() {
    return gulp.start(['build']);
  });
};

gulp.task('watch', watchFn);
