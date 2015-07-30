
/// <reference path='../node/node.d.ts' />

declare module 'gulp-clean' {
    interface Options {
        force: boolean;
    }

    function clean(options?: Options): NodeJS.WritableStream;

    export = clean;
}