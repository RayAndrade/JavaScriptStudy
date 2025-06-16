import { Cat } from './Cat.js';
import { Dog } from './Dog.js';

const whiskers = new Cat("Whiskers");
const fido = new Dog("Fido");

whiskers.greet();
fido.greet();

whiskers.purr();
fido.wagTail();

console.log("\nLet the passive-aggressive pet war begin!\n");

fido.barkAt(whiskers);
whiskers.scratch(fido);
fido.barkAt(whiskers);

console.log("\nFinal Health:");
console.log(`- ${whiskers.name}: ${whiskers.health}`);
console.log(`- ${fido.name}: ${fido.health}`);

