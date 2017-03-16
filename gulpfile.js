var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    inject = require('gulp-inject'),
    serve = require('gulp-serve');

gulp.task('default', function(callback){
    runSequence('build', 'serve', callback);
});
gulp.task('build', function(callback){
    runSequence('clean',
        'copy-build',
        'index',
        callback);
});

gulp.task('serve', serve('build'));
gulp.task('index', function(){
    var tpl_src = ['./build/vendor/**/*.js',
    './build/app/**/*.js',
    './build/assets/css/**/*.css'];
    return gulp.src('./public/views/index.php')
        .pipe(inject(gulp.src(tpl_src), {ignorePath: 'build'}))
        .pipe(gulp.dest('./build'));
});
gulp.task('clean', function(callback){
    return del(['./build'], {force: true}, callback);
});
gulp.task('copy-build', ['copy-assets', 'copy-app-js', 'copy-vendor-js']);

gulp.task('copy-assets', function(){
    return gulp.src('./public/assets/**/*')
        .pipe(gulp.dest('./build/assets'));
});

gulp.task('copy-app-js', function(){
    return gulp.src('./public/js/**/*.js')
        .pipe(gulp.dest('./build/app'));
});

gulp.task('copy-vendor-js', function(){
    return gulp.src('./public/vendor/**/*.js')
        .pipe(gulp.dest('./build/vendor'));
});