await new Promise(resolve => setTimeout(resolve, 1000));
export const NESTED_CONST='1';

let m;
if (Math.random() >= 0) {
    m = await Promise.resolve('async value');
} else {
    m = 'sync'

}
export const MESSAGE = m;