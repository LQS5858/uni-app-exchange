const files = require.context('.', false, /\.js$/)

let modules = {}
files.keys().forEach((key, i) => {
    console.log('--key--', key, i, files(key));
    if (key === './index.js') return
    const obj = files(key).default
    modules = Object.assign({}, modules, obj)
});
console.log('--modules---', modules);
export default modules