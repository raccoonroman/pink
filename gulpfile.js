'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
// var server = require('browser-sync').create();
var minify = require('gulp-csso');
var rename = require("gulp-rename");
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');

gulp.task('sass', function () {
	return gulp.src('source/sass/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest('source/css'))
		.pipe(minify())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('source/css'))
		// .pipe(server.stream());
});

// gulp.task('sass:watch', function () {
// 	gulp.watch('source/sass/style.scss', ['sass']);
// });

gulp.task('serve', ['sass'], function () {
	server.init({
		server: 'source/'
	});

	gulp.watch('source/sass/style.scss', ['sass']);
	gulp.watch('source/*.html')
		.on('change', server.reload);
});

gulp.task('images', function() {
	return gulp.src('source/img/*.{png,jpg,svg}')
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 3}),
			imagemin.jpegtran({progressive: true}),
			imagemin.svgo()
		]))

	.pipe(gulp.dest('source/img'));
})

gulp.task('webp', function() {
	return gulp.src('source/img/*.{png,jpg}')
	.pipe(webp({quality: 90}))
	.pipe(gulp.dest('source/img'));
})
