At the Top
```
const Singleton = (function () { /* A  down inside */ })();
```
A 
```
let uniqueInstance;
```
down 1
```
function SingletonConstructor() {  /* B  down inside */  }
```

inside
```
const value = Math.random();
```
down 1
```
return {
 getValue: function () {
 return value;
 }
 };
```
down to outside the return and } }
```
return {
 getInstance: function () {
  if (!uniqueInstance) {
    uniqueInstance = new SingletonConstructor();
  }
  return uniqueInstance;
 }
 };
 ```
down next 
```
const singleton1 = Singleton.getInstance();
```
```
const singleton2 = Singleton.getInstance();
```
console.log("Singleton 1 value:", singleton1.getValue());
```

down next 
```
console.log("Singleton 2 value:", singleton2.getValue());
```
down next 
```
console.log("Are both instances equal?", singleton1 === singleton2);
```

and now run and get:
```
```

