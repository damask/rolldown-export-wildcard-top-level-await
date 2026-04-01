// Entry for the BUGGY case: uses reexport-star (export *)
const { MESSAGE } = await import('./reexport-star');
console.log('MESSAGE:', MESSAGE); // Expected: "async:chunk"  Actual: ReferenceError
