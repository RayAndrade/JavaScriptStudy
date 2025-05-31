
Singleton implemented using closure (Module Pattern)
```
const Singleton = (function() { /* a */ })();
```

```
let instance;
/* b */
```

```
function init() { /* c */ }
```

```
const privateRandomNumber = Math.random();
/* d */
```

```
function privateMethod() {
  console.log("Private method called");
}
/* e */
```

```
function privateMethod() {
  console.log("Private method called");
}
return { /* f */ };
```

```
publicMethod: function() {
 console.log("Public method called");
   privateMethod();
},
getRandomNumber: function() {
  return privateRandomNumber;
}
```


```
{
 getInstance: function() {
  if (!instance) {
    instance = init();
    }
 return instance;
```

```
// Initialize static property manually (outside class body)
Singleton.instance = null;
// This guarantees that when the first object is created, Singleton.instance is initially null.

// === Testing code ===

const singletonA = new Singleton();
// First call to constructor: since instance is null, constructor creates the instance.

const singletonB = new Singleton();
// Second call: constructor detects Singleton.instance exists, returns existing instance.

singletonA.publicMethod();
// Call publicMethod on singletonA. Will invoke internal privateMethod as well.

console.log("Singleton A random number: " + singletonA.getRandomNumber());
// Prints the random number that was assigned during initialization.

console.log("Singleton B random number: " + singletonB.getRandomNumber());
// Prints same random number as singletonA, confirming shared instance.

console.log("Are both instances the same?", singletonA === singletonB);
// Strict equality check: confirms singletonA and singletonB are actually the same object.
```

