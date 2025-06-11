class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.privateRandomNumber = Math.random();
        Singleton.instance = this;
    }
    publicMethod() {
        // A public method exposed to external callers.
        console.log("Public method called");

        this.privateMethod();
        // Inside public method, we call the private-looking helper (still public in JS).
    }
}