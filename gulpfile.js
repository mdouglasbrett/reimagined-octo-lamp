'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

//  Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  return gulp.src([
    'styles/main.scss'
  ])
  .pipe(sass({
    precision: 10
  }).on('error', sass.logError))
  .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
  .pipe(minifyCss({keepSpecialComments: 0}))
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('styles/'))


});

//  Watch files for changes & reload
gulp.task('serve', ['styles'], () => {
  browserSync({
    notify: false,
    //  Run as an https by uncommenting 'https: true'
    //  https: true,
    browser: 'google-chrome',
    proxy: "localhost:3000"
  });

  gulp.watch(['styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['js/**/*.js'], [reload]);
  });
