const path = require('path');
const fs = require('fs')



module.exports = {
    mkdirsSync
}


/**
 * Recursively create folders
 * @param {string} dirname folder path
 */
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}