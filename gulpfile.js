var gulp = require('gulp'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	neat = require('node-neat').includePaths,
	watch = require('gulp-watch');

gulp.task('sass', function(){
	gulp.src('assets/scss/styles.scss')
		.pipe(sass({
			includePaths: ['sass'].concat(neat)
		}).on('error', sass.logError))
		.pipe(gulp.dest('assets/css'));
	return gulp.src('assets/css/*.css')
		.pipe(minifyCss({compatibility:'ie8'}))
		.pipe(gulp.dest('build/css/'));

});

gulp.task('js', function(){
	gulp.src('assets/js/**/*.js')
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('build/js'));
});

gulp.task('angular', function(){
	gulp.src([
		'node_modules/angular/angular.min.js',
		'node_modules/angular-resource/angular-resource.min.js',
		'node_modules/angular-sanitize/angular-sanitize.min.js',
		'node_modules/angular-animate/angular-animate.min.js',
		'node_modules/angular-ui-router/build/angular-ui-router.min.js',
		'node_modules/slick-carousel/slick/slick.min.js',
		'node_modules/angular-slick-carousel/dist/angular-slick.min.js',
		'assets/js-ng/anim-in-out.js',
		'assets/js-ng/picturefill.min.js',
		'assets/js-ng/angular-picture.js',
		'assets/js-ng/angular-socialshare.min.js',
		'node_modules/jquery/dist/jquery.js'
	])
	.pipe(concat('angular.min.js'))
	.pipe(gulp.dest('build/js'));

	gulp.src([
		'node_modules/angular/angular.min.js.map',
		'node_modules/angular-resource/angular-resource.min.js.map'
	])
	.pipe(gulp.dest('build/js'));

});

gulp.task('images', function(){
	gulp.src('assets/images/**/*.{gif,jpg,png,svg,ico}')
		.pipe(gulp.dest('build/images'));
});

gulp.task('fonts', function(){
	gulp.src('assets/fonts/**/*.{ttf,woff,eof,svg}')
		.pipe(gulp.dest('build/fonts'));
});

gulp.task('watch', function(){
	gulp.watch('assets/scss/*.scss', ['sass']);
	gulp.watch('assets/js/**/*', ['js']);
});


gulp.task('init', ['sass', 'js', 'angular', 'images', 'fonts']);
gulp.task('default', ['sass', 'js', 'images', 'fonts']);
