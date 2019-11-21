var CryptoJS = require('crypto-js');



module.exports = {
    md5,
    sha1,
    sha224,
    sha256,
    sha384,
    sha512,
    sha3,
    aes,
    CryptoJS
}

/**
 * Do md5 encryption
 * @param {string} s A string that needs to be encrypted
 */
function md5(s) {
    return CryptoJS.MD5(s).toString()
}

function sha1(s) {
    return CryptoJS.SHA1(s).toString();
}

function sha224(s) {
    return CryptoJS.SHA224(s).toString();
}

function sha256(s) {
    return CryptoJS.SHA256(s).toString();
}

function sha384(s) {
    return CryptoJS.SHA384(s).toString();
}

function sha512(s) {
    return CryptoJS.SHA512(s).toString();
}

function sha3(s, c) {
    return CryptoJS.SHA3(s, {
        outputLength: c || 512
    }).toString();
}

/**
 * AES encipher
 * @param {string} pwd key
 * @param {object} options Including vector and so on configuration
 */
function aes(pwd, options) {
    var key = pwd;
    // get options
    var opt = options || {};
    opt.mode = opt.mode || CryptoJS.mode.CBC;
    opt.padding = opt.padding || CryptoJS.pad.Pkcs7;
    
    // 
    if(opt.iv) {
        key = CryptoJS.enc.Utf8.parse(key);
        opt.iv = CryptoJS.enc.Utf8.parse(opt.iv);
    } else {
        var m = md5(key);
        var originKey = md5(m.substring(0, 16));
        var originIv = m.substring(16);
        key = CryptoJS.enc.Utf8.parse(originKey);
        opt.iv = CryptoJS.enc.Utf8.parse(originIv);
    }

    return {
        encrypt: function(data) {
            var encrypted = CryptoJS.AES.encrypt(data, key, opt);
            return encrypted.toString();
        },
        decrypt: function(data) {
            var decrypted = CryptoJS.AES.decrypt(data, key, opt);
            return CryptoJS.enc.Utf8.stringify(decrypted);
        }
    }
}

aes.Mode = CryptoJS.mode;
aes.Pad = CryptoJS.pad;
