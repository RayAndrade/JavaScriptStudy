import { Pet } from './Pet.js';

export class Dog extends Pet {
    barkAt(target) {
        console.log(`${this.name} the Dog barks furiously at ${target.name}!`);
        target.takeDamage(8);
    }

    wagTail() {
        console.log(`${this.name} wags tail. Everything is forgiven.`);
    }
}
