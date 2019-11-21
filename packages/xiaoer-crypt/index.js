var CryptoJS = require('crypto-js');



module.exports = {
    md5
}

/**
 * Do md5 encryption
 * @param {string} s A string that needs to be encrypted
 */
function md5(s) {
    return CryptoJS.MD5(s).toString()
}