
// Variable chain
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload');

// Scripts task
// Uglifies JS
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

// Styles task
// Uglifies Sass
gulp.task('styles', function(){
	gulp.src('sass/*.scss')
	.pipe(sass({
		style: 'compressed'
	}))
	.pipe(gulp.dest('css/'))
	.pipe(livereload());
});

// Watch tasks
// Watches Js and Sass
gulp.task('watch', function(){
	
	var server = livereload();

	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('sass/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'styles', 'watch']);