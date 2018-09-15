var gulp = require('gulp');
var pcss = require('gulp-postcss');
var apf = require('gulp-autoprefixer');
var  apfi  = require('gulp-autopolyfiller');
var watch = require('gulp-watch');
var css = require('gulp-cssimport');


gulp.task("default"  ,  ()=>{

  var fullpath = __dirname + "/Styles/" + 'index.css';
gulp.src(fullpath)
.pipe(css())
.pipe(apf())
.pipe(gulp.dest(__dirname  ));
gulp.watch((__dirname + "/Styles/" + 'index.css'),()=>{
  gulp.src(fullpath)
  .pipe(css())
  .pipe(apf())
  .pipe(gulp.dest(__dirname  ));


});
});
