// Entry for the BUGGY case
const { MESSAGE, NESTED_CONST } = await import('./async-module');
console.log('MESSAGE:', MESSAGE); 
console.log('CONST:', NESTED_CONST); 
