var gulp = require('gulp');
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');

gulp.task('min-html', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlclean())
    .pipe(gulp.dest('./dist'));
});

 
gulp.task('min-css', function() {
  return gulp.src('./source/scss/*.scss')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('background', function() {
	gulp.watch('./source/scss/style.scss',['min-css']);
	gulp.watch('./source/scss/gulpfile.scss',['min-css']);
	gulp.watch('./source/scss/base.scss',['min-css']);
	gulp.watch('./source/index.html',['min-html']);
})
