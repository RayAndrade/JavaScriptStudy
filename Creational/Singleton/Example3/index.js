import { Singleton } from './Singleton.js';

console.log('--- Singleton Pattern Demo (GoF-style, JavaScript) ---');

const s1 = Singleton.Instance();
console.log('First Singleton instance value: ', s1.value);

const s2 = Singleton.Instance();
console.log('Second Singleton instance value:', s2.value);
console.log('Are both references the same object? ', s1 === s2);

try {
    const bad = new Singleton();                // This should fail because the constructor is guarded.
} catch (err) {
    console.log('Attempting "new Singleton()" caused an error as expected:');
    console.log(err.message); }