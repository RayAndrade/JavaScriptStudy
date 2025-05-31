

We Start with a Class function called *Singleton*
level *a*

```
const Singleton = (function () {  b  })();
```
level *a*
```
let uniqueInstance;
```

level *b*
```
function init() {  c  }
```

level *c*
```
let value = Math.random();
```

level *c*
```
return { d };
```

level *d*
```
getInstance: function () { e };
```
level *e*
```
if (!uniqueInstance) {
   uniqueInstance = init();
}
```
level *e*
```
return uniqueInstance;
```

level *a*
```
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log("Singleton 1 value:", singleton1.getValue());
console.log("Singleton 2 value:", singleton2.getValue());
console.log("Are both instances equal?", singleton1 === singleton2);
```
