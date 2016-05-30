var gulp = require('gulp');
var runSequence = require('run-sequence');

var build = function(done) {
  return runSequence(
    'clean',
    ['styles'],
    done
  );
};

gulp.task('build', build);
