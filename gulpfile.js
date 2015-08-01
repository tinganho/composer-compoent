
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var connect = require('gulp-connect');
var mochaPhantomJs = require('gulp-mocha-phantomjs');
var open = require('open');
var clean = require('gulp-clean');
var cp = require('child_process');
var es = require('event-stream');

var exec = cp.exec;

gulp.task('clean', function() {
    return gulp.src('local', { read: false })
        .pipe(clean());
});

gulp.task('server-test', function() {
    connect.server({
        root: ['local', 'local/src'],
        port: 3000
    });

    open('http://localhost:3000/test/runner.html');
});

gulp.task('compile-typescript-files', ['clean'], function(next) {
    exec('tsc', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        next(err);
    });
});

gulp.task('copy-server-files', ['clean'], function() {
    var runnerCopyStream = gulp.src('./test/runner.html', { base: './test' })
        .pipe(gulp.dest('./local/test'));

    var vendorCopyStream = gulp.src('./test/vendor/**/*', { base: './test' })
        .pipe(gulp.dest('./local/test'));

    var mochaCopyStream = gulp.src('./node_modules/mocha/mocha.{css,js}', { base: './node_modules/mocha' })
        .pipe(gulp.dest('./local/test/vendor'));

    var chaiCopyStream = gulp.src('./node_modules/chai/chai.js', { base: './node_modules/chai' })
        .pipe(gulp.dest('./local/test/vendor'));

    return es.concat(runnerCopyStream, vendorCopyStream, mochaCopyStream, chaiCopyStream);
});

gulp.task('compile', ['copy-server-files', 'compile-typescript-files', ]);

gulp.task('test', ['compile'], function() {
    return gulp
        .src('local/test/runner.html')
        .pipe(mochaPhantomJs({ reporter: 'spec', phantomjs: {
            useColors: true,
        }}));
});

gulp.task('default', ['test']);