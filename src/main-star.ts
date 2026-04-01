// Entry for the BUGGY case: uses reexport-star (export *)
const { MESSAGE, NESTED_CONST } = await import('./async-module');
console.log('MESSAGE:', MESSAGE); 
console.log('CONST:', NESTED_CONST); 
