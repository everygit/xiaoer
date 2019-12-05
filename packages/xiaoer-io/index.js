const path = require('path');
const fs = require('fs')



module.exports = {
    mkdirsSync,
    rmdirsSync,
    cpdirsSync
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

function rmdirsSync(dirname){
    let files = [];
    if(fs.existsSync(dirname)){
        files = fs.readdirSync(dirname);
        files.forEach((file, index) => {
            let curPath = dirname + "/" + file;
            if(fs.statSync(curPath).isDirectory()){
                rmdirsSync(curPath); //递归删除文件夹
            } else {
                fs.unlinkSync(curPath); //删除文件
            }
        });
        fs.rmdirSync(dirname);
    }
}

/**
 * copy dirs
 * @param {string} from Copy source path
 * @param {string} to Copy result path
 * @param {function} callback whether to allow copy
 */
function cpdirsSync(from, to, callback) {
    let ls = fs.readdirSync(from);
    ls.forEach(obj => {
        var relObj = path.resolve(from, obj);
        var toDir = path.resolve(to, obj);
        // TODO: need check 
        var isCopy = (callback || function(){return true})(relObj);
        if(isCopy) {
            let t = fs.statSync(relObj);
            if(t.isDirectory()) {
                var nextFromDir = path.resolve(from, obj);
                var nextToDir = path.resolve(to, obj);
                console.log(nextFromDir, nextToDir);
                mkdirsSync(toDir);
                cpdirsSync(nextFromDir, nextToDir, callback);
            } else {
                fs.copyFileSync(relObj, toDir);
            }
        }
    });
}