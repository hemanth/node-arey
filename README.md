# arey
> Experimental module that uses ES6 classes to extend `Array`.

__Try it:__ ```npm install arey```

```js
let Arey = require("arey").Arey;

let list = new Arey();

Arey.of(1,2,3); // [1,2,3]
Arey.isArray([1,2,3]) // true
.diff([1,2,3], [3,4,5]) // [1,2]
```

P.S: More methods are on it's way.


