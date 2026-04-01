// Async module that imports from its re-exporter, forming a cycle:
//   async-module → reexport → async-module
// With `export *` in reexport, rolldown puts async-module BEFORE reexport in the
// output chunk, so CHUNK_INIT is in the TDZ when this line evaluates → ReferenceError.
export * from './async-nested-module';
