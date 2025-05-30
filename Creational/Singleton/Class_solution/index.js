// index.js

import { Singleton } from './Singleton.js';

// Get two instances
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// Demo output
console.log("Instance 1 value:", instance1.getValue());
console.log("Instance 2 value:", instance2.getValue());
console.log("Are both instances the same?", instance1 === instance2);

// Optional: Show error if someone tries direct construction
try {
    const bad = new Singleton();
} catch (e) {
    console.error("Error:", e.message);
}

