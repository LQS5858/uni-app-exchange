const files = require.context('.', false, /\.json$/)


let messages = {}
files.keys().forEach(key => {
    console.log(files(key));
    messages = Object.assign({}, messages, files(key))
});
export default messages