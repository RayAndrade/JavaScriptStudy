

```
const Singleton = (function() {
    let instance;

    function init() {
        const privateRandomNumber = Math.random();

        function privateMethod() {
            console.log("Private method called");
        }

        return {
            publicMethod: function() {
                console.log("Public method called");
                privateMethod();
            },
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    }

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
const Singleton = (function() { /**/ }
```
```
let instance;
/**/
```

```
function init() { /**/ }
```

```
const privateRandomNumber = Math.random();
/**/
```

```
function privateMethod() {
 console.log("Private method called");
}
/**/
```

```
return { /**/ };
```

```
getInstance: function() {
 if (!instance) {
     instance = init();
     }
     return instance;
}
/**/
```

```
)();
```

````
const singletonA = Singleton.getInstance();
const singletonB = Singleton.getInstance();
```

```
singletonA.publicMethod();
```

```
console.log("Singleton A random number: " + singletonA.getRandomNumber());
console.log("Singleton B random number: " + singletonB.getRandomNumber());
```


```
console.log("Are both instances the same?", singletonA === singletonB);
```
