// FIX: named export instead of export * — rolldown now emits this file
// BEFORE async-module in the chunk, so CHUNK_INIT is initialized in time.
export { MESSAGE } from './async-nested-module';
export const CHUNK_INIT = 'chunk';
