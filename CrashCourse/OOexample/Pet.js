export class Pet {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }

    greet() {
        console.log(`${this.name} says: "Hi! I'm a generic pet. I probably eat socks."`);
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage. Health is now ${this.health}.`);
    }
}
