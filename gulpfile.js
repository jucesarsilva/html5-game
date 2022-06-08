const gulp = require('gulp');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const htmlmin = require('gulp-html-minifier');
const uglify = require("gulp-uglify");
const watch = require("gulp-watch");
const jshint = require("gulp-jshint");
const concat = require("gulp-concat");
const cssmin = require('gulp-cssmin');
const clean = require('gulp-clean');

gulp.task("default", function () {
  gutil.log("Gulp is working!");
  gulp.start('babel');
  gulp.start('uglify');
  gulp.start('minify-css');
  gulp.start('concat');
  gulp.start('remove');
});

gulp.task('jshint', function () {
  gutil.log('Starting jshint task.');
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('babel', function () {
  gutil.log('Starting babel task.');
  return gulp.src(['./js/*.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./ecma5'));
});

gulp.task('uglify', ['babel'], function () {
  gutil.log('Starting uglify task.');
  return gulp.src(['./ecma5/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./temp'));
});

gulp.task('minify-css', function () {
  gutil.log('Starting minify-css task.');
  return gulp.src(['./css/*.css'])
    .pipe(cssmin())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('concat', ['babel', 'uglify'], function () {
  gutil.log('Starting concat task.');
  return gulp.src('./temp/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('remove', ['babel', 'uglify', 'concat'], function () {
  gutil.log('Starting remove task.');
  return gulp.src(['./temp', './ecma5'], { read: false }).pipe(clean());
});

gulp.task('watch', function () {
  gutil.log('Starting watch task.');
  gulp.watch('./js/*.js', function (event) {
    gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    //gulp.start('jshint');
    gulp.start('uglify');
    gulp.start('minify-css');
    gulp.start('concat');
    gulp.start('remove');
  });
});