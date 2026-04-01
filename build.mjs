/**
 * Reproduce: rolldown emits wrong module order in a chunk when `export *`
 * re-exports from a module that has top-level await AND a circular dependency.
 *
 * Produces two bundles:
 *   dist/bundle-star.js   — uses `export * from './async-module'`  (BUGGY)
 *   dist/bundle-named.js  — uses `export { MESSAGE } from './async-module'`  (FIXED)
 *
 * Run:
 *   node build.mjs
 *   node dist/bundle-star.js    # ReferenceError: Cannot access 'CHUNK_INIT' before initialization
 *   node dist/bundle-named.js   # MESSAGE: async:chunk
 */

import { rolldown } from '/Users/bsaf/arcadia/search-interfaces/oceania/projects/web4/node_modules/rolldown/dist/index.mjs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function build(input, outputFile, label) {
    console.log(`Building ${label}...`);
    const bundle = await rolldown({
        input: path.join(__dirname, 'src', input),
    });
    await bundle.write({
        format: 'esm',
        dir: path.join(__dirname, 'dist'),
        entryFileNames: outputFile,
        chunkFileNames: outputFile.replace('.js', '-[hash].js'),
    });
    console.log(`  -> dist/${outputFile}\n`);
}

await build('main-star.ts',  'bundle-star.js',  'buggy  (export *)');
await build('main-named.ts', 'bundle-named.js', 'fixed  (export { MESSAGE })');
