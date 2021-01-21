const files = require.context('.', false, /\.js$/)

let modules = {}
files.keys().forEach((key, i) => {
    if (key === './index.js') return
    const obj = files(key).default
    modules = Object.assign({}, modules, obj)
});
export default modules