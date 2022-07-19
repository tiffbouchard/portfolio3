---
templateKey: blog-post
title: es6 imports and exports
date: 2022-01-26T02:39:36.634Z
featuredpost: true
---
**Default imports**

```javascript
export default exampleExport;

import A from './A';
import exampleExport from './A';
import something from './A';
```

* **default import** only works if A has a **default export**
* you can import it with any name, because it will always be whatever the default export was

**Named imports**

```javascript
export const A = 42;

import { A } from './A';
import { myA } from './A'; // Doesn't work!
import { Something } from './A'; // Doesn't work!


```

* name matters because you are importing a specific thing by its export name

\------

```javascript
export default 42;
export const myA = 43;
export const Something = 44;

// importing the default and the named exports
import A, { myA, Something } from './A';

// can assign any name to the default, and import the named exports 'as' another name
import X, { myA as myX, Something as XSomething } from './A'

```

* a module can only have one default export but many named exports