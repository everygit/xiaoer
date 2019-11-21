# @xiaoerr

```
npm install @xiaoerr/crypt
```

```
let {md5, aes} = require('@xiaoerr/crypt');

console.log(md5("123"));

var a = aes("thisisapassword");
var b = a.encrypt("sbt0198@163.com");
console.log(b);
var c =  a.decrypt(b);
console.log(c)
```