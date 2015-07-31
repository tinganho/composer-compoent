
/// <reference path='../node/node.d.ts' />

declare module 'gulp-mocha-phantomjs' {
    interface Dimension {
        width: number;
        height: number;
    }

    interface PhantomJsOptions {
        viewportSize?: Dimension;
        useColors?: boolean;
    }

    interface Options {
        reporter?: string;
        mocha?: any;
        dump?: string;
        phantomjs?: PhantomJsOptions;
    }

    function run(options?: Options): NodeJS.WritableStream;
    export = run;
}