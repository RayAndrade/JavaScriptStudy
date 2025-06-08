step **01**
```
const Singleton = (function() { 
/*2*/ 
})();
```

step **02** Private instance variable
```
let instance;
    return {
    };
/*03*/ 
```

step **03** Private initialization function
```
function init() { 
/*04*/
}
```

step **04** Private data and methods
```
const privateRandomNumber = Math.random();
/*05*/
```

step **05**
```
function privateMethod() {
            console.log("Private method called");
        }
        /*06*/
```

step **06** gpto after return

```
 publicMethod: function() {
                console.log("Public method called");
                privateMethod();
            }
            /*07*/
```

step **07**
```
,
            getRandomNumber: function() {
                return privateRandomNumber;
            }
            // pass the };} /*08*/
```

```
return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
```



complete project
```
const Singleton = (function() {
    let instance;
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
```


finished
```
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
```


