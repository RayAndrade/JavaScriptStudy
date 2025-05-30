// Singleton implemented using closure (Module Pattern)
const Singleton = (function() { /* a */ })();

// Test code
const singletonA = Singleton.getInstance();
const singletonB = Singleton.getInstance();

singletonA.publicMethod();
console.log("Singleton A random number: " + singletonA.getRandomNumber());
console.log("Singleton B random number: " + singletonB.getRandomNumber());

console.log("Are both instances the same?", singletonA === singletonB);

