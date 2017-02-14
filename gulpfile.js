const gulp         = require('gulp')
const clean        = require('gulp-clean')
const rev          = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const htmlmin   = require('gulp-htmlmin')

gulp.task('revJS', function () {
  return gulp.src(['dist/app.js', 'dist/vendor.js'])
    .pipe(clean({ force: true }))
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/js'))
})

gulp.task('rev', ['revJS'], function () {
  gulp.src(['rev/**/*.json', 'dist/index.html'])
    // .pipe(clean({ force: true }))
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['rev'])
