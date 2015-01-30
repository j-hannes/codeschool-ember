var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

gulp.task('connect', function() {
  connect.server({
    port: 8082,
    root: 'dist',
    livereload: {port: 35780}
  });
});

gulp.task('watch', function() {
  watch('dist/*')
    .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);

