const files = require.context('.', false, /\.js$/)
console.log('--file--', files);
let modules = []
files.keys().forEach(key => {
    if (key === './index.js') return

    const item = files(key).default
    console.log('--key--', key, item);
    modules = [...modules, ...item]
});
export default modules