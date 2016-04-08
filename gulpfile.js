var gulp = require('gulp');
var watcher = gulp.watch('Javascript/**/*.js', ['uglify','reload']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
gulp.task('default', function() {
  // place code for your default task here
gulp.task('html',function(){
gulp.src(app/index.html)
.pipe(gulp.dest('dist'))
});
gulp.task('sass',function(){
});
});
