let {rmdirsSync, cpdirsSync} = require('./index.js');
rmdirsSync("./a");

cpdirsSync('./tt', './pp')