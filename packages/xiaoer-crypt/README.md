# @xiaoerr

## install

```
npm install @xiaoerr/crypt
```
## Example
### md5
```js
let { md5 } = require('@xiaoerr/crypt');
var a = md5("xiaoerr");
```
### SHA
```js
let { sha1, sha224, sha256, sha384, sha512, sha3 } = require('@xiaoerr/crypt');
var a = sha1("xiaoerr");
var b = sha224("xiaoerr");
// ....
var z = sha3("xiaoerr", 224);
```
### AES
```
let {aes} = require('@xiaoerr/crypt');
var a = aes("thisisapassword");
var b = a.encrypt("sbt0198@163.com");
console.log(b);
var c =  a.decrypt(b);
console.log(c)
```