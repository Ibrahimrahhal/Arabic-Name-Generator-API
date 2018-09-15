var gulp = require('gulp');
var pcss = require('gulp-postcss');
var apf = require('gulp-autoprefixer');
var  apfi  = require('gulp-autopolyfiller');
var watch = require('gulp-watch');

watch(__dirname + "/Styles/" + 'index.css');
gulp.task("default"  ,  ()=>{

  var fullpath = __dirname + "/Styles/" + 'index.css';
gulp.src(fullpath)

.pipe(apf())
.pipe(gulp.dest(__dirname  ));
});

gulp.task("Converting",()=>{
gulp.src(Styles/index.css)
.pipe(pcss())
.pipe(apf())
.pipe(gulp.dest("/"));
});
