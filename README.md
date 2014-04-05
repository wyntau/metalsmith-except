## metalsmith-except
[![NPM version](https://badge.fury.io/js/metalsmith-except.png)](http://badge.fury.io/js/metalsmith-except) [![Dependencies Status](https://david-dm.org/Jeremial/metalsmith-except.png)](https://david-dm.org/Jeremial/metalsmith-except)

a file's attribute `except` filter for metalsmith

### Install
[![metalsmith-except](https://nodei.co/npm/metalsmith-except.png?compact=true)](https://nodei.co/npm/metalsmith-except)

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