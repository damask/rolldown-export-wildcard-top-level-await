// BUG: export * from an async module that is in a circular dep
// rolldown emits async-module BEFORE this file in the chunk,
// so CHUNK_INIT (defined here) is not yet initialized when async-module runs.
export * from './async-module';
export const CHUNK_INIT = 'chunk';
