
export class Singleton {
    static #uniqueInstance = null;
    constructor() {
        if (Singleton.#uniqueInstance !== null) { // If an instance already exists...
            throw new Error('Use Singleton.Instance() — Singleton is already created.');
        }
        this.value = Math.random();}
    static Instance() {
        if (Singleton.#uniqueInstance === null) {
            Singleton.#uniqueInstance = new Singleton();
        }
        return Singleton.#uniqueInstance;
    }
}