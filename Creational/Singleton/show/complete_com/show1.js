constructor() {
    // The constructor is automatically called when new Singleton() is executed

    if (Singleton.instance) {
        // If an instance already exists, return that instance immediately
        // This prevents creating multiple instances — core behavior of Singleton
        return Singleton.instance;
    }

    // If no instance exists yet, we initialize internal state:
    this.privateRandomNumber = Math.random();
    // Each Singleton instance gets a random number when first created.
    // But since only one instance exists, this value stays fixed for all uses.

    Singleton.instance = this;
    // Save this current object as the static instance.
    // Future calls to new Singleton() will reuse this object.
}

publicMethod() {
    // A public method exposed to external callers.
    console.log("Public method called");

    this.privateMethod();
    // Inside public method, we call the private-looking helper (still public in JS).
}

getRandomNumber() {
    // A public getter function to retrieve the internal privateRandomNumber.
    return this.privateRandomNumber;
}

privateMethod() {
    // Technically this is still a public method.
    // In pre-ES2022 JS, private methods are often faked by naming convention (e.g., _privateMethod).
    console.log("Private method called");
}