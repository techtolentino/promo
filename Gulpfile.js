
// Variable chain
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	webserver = require('gulp-webserver');

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
	.pipe(gulp.dest('css/'));
});

// HTML task
gulp.task('html', function() {
  gulp.src('*.html');
});

// Server
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// Watch tasks
// Watches Js and Sass
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('sass/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'styles', 'html', 'watch', 'webserver']);