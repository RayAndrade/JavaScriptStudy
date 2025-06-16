import { Pet } from './Pet.js';

export class Cat extends Pet {
    scratch(target) {
        console.log(`${this.name} the Cat scratches ${target.name} with sass!`);
        target.takeDamage(10);
    }

    purr() {
        console.log(`${this.name} purrs like royalty. You may pet me... once.`);
    }
}
