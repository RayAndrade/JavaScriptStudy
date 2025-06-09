step **1**
```
const Singleton = (function() { 
/*2*/ 
})();
```

step **2** Private instance variable
```
let instance;
    return {
    };
/*3*/ 
```

step **03** Private initialization function
```
function init() { 
/*4*/
}
```

step **4** Private data and methods
```
const privateRandomNumber = Math.random();
/*5*/
```

step **5**
```
function privateMethod() {
            console.log("Private method called");
        }
        /*06*/
```

step **6** gpto after return

```
 publicMethod: function() {
                console.log("Public method called");
                privateMethod();
            }
            /*07*/
```

step **7**
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
```

```
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


