var gulp = require('gulp'),
	uglify = require('gulp-uglify');

// Scripts task
// Uglifies
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

// Styles task
// 
gulp.task('styles', function(){
	console.log('run styles');
});


gulp.task('default', ['scripts', 'styles']);