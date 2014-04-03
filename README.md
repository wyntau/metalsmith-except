## metalsmith-except
a file's attribute `except` filter for metalsmith

### Install

    npm install metalsmith-except

### Usage
```js
var metalSmith = require('metalsmith');
var except = require('metalsmith-except');

var metalsmith = metalSmith(__dirname);
metalsmith
    .source('post')
    .use(except('name title'))
    .build()
```

### License
MIT