var gulp = require('gulp'),
	uglify = require('gulp-uglify');

// Default Gulp task
// Uglifies JS code
gulp.task('default', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
});