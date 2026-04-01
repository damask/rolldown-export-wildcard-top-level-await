// Entry for the FIXED case: uses reexport-named (named export)
const { MESSAGE } = await import('./reexport-named');
console.log('MESSAGE:', MESSAGE); // prints "async:chunk" correctly
