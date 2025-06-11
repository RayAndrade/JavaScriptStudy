class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.privateRandomNumber = Math.random();
        Singleton.instance = this;
    }
    getRandomNumber() {
        // A public getter function to retrieve the internal privateRandomNumber.
        return this.privateRandomNumber;
    }
}