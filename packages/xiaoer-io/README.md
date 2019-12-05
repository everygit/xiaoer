# @xiaoerr

```
npm install @xiaoerr/io
```

# rmdirsSync
Delete all files in the folder
```js
let {rmdirsSync} = require('@xiaoerr/io');
rmdirsSync("./a");
```

# mkdirsSync
Create folder recursively
```js
let {mkdirsSync} = require('@xiaoerr/io');
mkdirsSync("./a/b/c/d");
```

# cpdirsSync
Copy entire folder, callback can control whether each file or folder can be copied
```js
let {cpdirsSync} = require('@xiaoerr/io');
cpdirsSync("./a", "./b", () => true);
```