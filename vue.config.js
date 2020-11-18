let path = require('path');
let vars = path.resolve(__dirname, 'assets/styles/variable.less')
module.exports = {
    css: {
        loaderOptions: {
            less: {
                globalVars: {
                    "hack": `true; @import "${vars}"`
                }
            }
        }
    }
}