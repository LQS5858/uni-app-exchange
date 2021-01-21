const files = require.context('.', false, /\.js$/)
let modules = []
files.keys().forEach(key => {
    if (key === './index.js') return

    const item = files(key).default
    modules = [...modules, ...item]
});
export default modules