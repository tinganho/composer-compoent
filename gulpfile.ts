
/// <reference path="typings/node/node.d.ts"/>
/// <reference path='typings/gulp/gulp.d.ts'/>
/// <reference path='typings/gulp-rename/gulp-rename.d.ts'/>
/// <reference path='typings/gulp-connect/gulp-connect.d.ts'/>
/// <reference path='typings/gulp-mocha-phantomjs/gulp-mocha-phantomjs.d.ts'/>
/// <reference path='typings/open/open.d.ts'/>
/// <reference path='typings/gulp-clean/gulp-clean.d.ts'/>
/// <reference path='typings/event-stream/event-stream.d.ts'/>

import gulp = require('gulp');
import rename = require('gulp-rename');
import path = require('path');
import fs = require('fs');
import connect = require('gulp-connect');
import mochaPhantomJs = require('gulp-mocha-phantomjs');
import open = require('open');
import clean = require('gulp-clean');
import cp = require('child_process');
import es = require('event-stream');

var exec = cp.exec;

gulp.task('clean', () => {
    return gulp.src('local', { read: false })
        .pipe(clean());
});

gulp.task('server-test', () => {
    connect.server({
        root: ['local', 'local/src'],
        port: 3000
    });

    open('http://localhost:3000/test/runner.html');
});

gulp.task('compile-typescript-files', ['clean'], (next) => {
    exec('tsc', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        next(err);
    });
});

gulp.task('copy-server-files', ['clean'], () => {
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

gulp.task('test', ['compile'], () => {
    return gulp
        .src('local/test/runner.html')
        .pipe(mochaPhantomJs({ reporter: 'spec', phantomjs: {
            useColors: true,
        }}));
});

gulp.task('default', ['test']);