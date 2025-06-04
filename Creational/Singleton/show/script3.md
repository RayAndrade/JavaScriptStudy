
```
const Singleton = (function() { /**/ })();
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
```

```
const Singleton = (function() {
    let instance;
    function init() {
        return {
        /**/
        };
    }
    return {
        
    };
})();
```
```
```

```
        getInstance: function() {
        }
```





```
        const privateRandomNumber = Math.random();
        function privateMethod() {
            console.log("Private method called");
        }
```


```
           publicMethod: function() {
                console.log("Public method called");
                privateMethod();
            }
```


```
         ,
            getRandomNumber: function() {
                return privateRandomNumber;
            }
```


last paste
```
            if (!instance) {
                instance = init();
            }
            return instance;
```













```
```



**The Test v**

```
const singletonA = Singleton.getInstance();
const singletonB = Singleton.getInstance();

console.log("Singleton A random number: " + singletonA.getRandomNumber());
console.log("Singleton B random number: " + singletonB.getRandomNumber());

console.log("Are both instances the same?", singletonA === singletonB);
```

