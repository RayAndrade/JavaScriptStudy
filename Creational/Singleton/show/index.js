const Singleton = (function() {
    // Private instance variable
    let instance;

    // Private initialization function
    function init() {
        // Private data and methods
        const privateRandomNumber = Math.random();

        function privateMethod() {
            console.log("Private method called");
        }

        return {
            // Public methods and properties
            publicMethod: function() {
                console.log("Public method called");
                privateMethod();
            },
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    }

    // Public interface to get the Singleton instance
    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

// Test code
const singletonA = Singleton.getInstance();
const singletonB = Singleton.getInstance();

singletonA.publicMethod();
console.log("Singleton A random number: " + singletonA.getRandomNumber());
console.log("Singleton B random number: " + singletonB.getRandomNumber());

console.log("Are both instances the same?", singletonA === singletonB);