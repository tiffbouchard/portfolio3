---
templateKey: blog-post
title: commonjs, es modules, amd and umd
date: 2022-01-24T01:40:25.876Z
featuredpost: true
tags:
  - notes
  - tech
---
Different ways to import and export modules

<br/>

CommonJS (CJS)

`import`

`const module = require('./module.js');`

`export`

`module.exports = function module(n) {}`

* node.js uses common.js
* imports synchronously
* imports from node_modules or local dir
* gives a copy of imported object
* does not work in browser

<br/>

AMD (Asynchronous Module Definition)

```
define(['dep'], function(dep){ 
  // define module by returning a value 
  return function () {} 
 });
 
// "simplified CommonJS wrapping" https://requirejs.org/docs/whyamd.html
define(function (require) {
    var dep1 = require('dep1'),
        dep2 = require('dep2');
    return function () {};
});
```

* made for frontend - cjs was supposed to be for backend

<br/>

UMD (Universal Module Definition)

```
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
}));
```

* front and backend
* pattern to configure several module systems
* used as fallback module when using bundler like rollup/webpack

<br/>

ESM (ES Modules)

```
import React from 'react';

import {foo, bar} from './myLib';

...

export default function() {
  // your Function
};
export const function1() {...};
export const function2() {...};
```

* works in many modern browsers
* [tree-shakeable ](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)(dead code elimination for example { foo, bar }, but also can apply to exports to shake off modules that were not explicitly imported, which makes prod builds smaller - there is a specific way to do that) 
* allows bundlers to remove unecessary code = faster load
* could be called in HTML

<br />

<https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm>