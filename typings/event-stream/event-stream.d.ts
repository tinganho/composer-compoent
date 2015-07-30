
/// <reference path='../node/node.d.ts' />

declare module 'event-stream' {
    export function concat(...streams: NodeJS.WritableStream[]): NodeJS.WritableStream;
}