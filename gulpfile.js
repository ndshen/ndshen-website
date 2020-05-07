const gulp = require('gulp');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const zip = require('gulp-zip');


function lint() {
  return gulp.src([
    './_js/components/formcarry.js',
    './_js/components/infiniteScroll.js',
    './_js/components/pageTransition.js',
    './_js/components/popup.js',
    './_js/_inits.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function scripts() {
  return browserify('./_js/app.js')
    .transform('babelify', {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/js'));
}

function dist() {
  return gulp.src([
    './**',
    '!./.DS_Store',
    '!./.git',
    '!./node_modules/**'
  ])
    .pipe(zip('barber-jekyll.zip'))
    .pipe(gulp.dest('../'))
}


const build = gulp.series(scripts);
gulp.task('default', build);


exports.lint = lint;
exports.scripts = scripts;
exports.dist = dist;
