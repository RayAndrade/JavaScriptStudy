
**START**

```
const Singleton = (function() { /**/ })();
```

```
function init() { /**/  }
```






working backwards




```
function init() { /**/ }
```

```
const privateRandomNumber = Math.random();

        function privateMethod() {
            console.log("Private method called");
        } /**/
```




```
return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
```

after privte method
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

**START**

```
const Singleton = (function() { /**/ })();
```


Warning occures .. will ignore for now
```
let instance;
/**/
```

```
function init() { /**/ }
```

warning (don't worrie
```
const privateRandomNumber = Math.random();
/**/
```

```
function privateMethod() {
 console.log("Private method called");
}
return { /**/ };
```

```
return { /**/ };
```

Here THIS STEP clears the errors
```
}getInstance: function() {
 if (!instance) {
     instance = init();
     }
     return instance;
};
/**/
```



```
return {
/**/ 
};
```






Last Step for block
```
getInstance: function() {
  if (!instance) {
    instance = init();
   }
   return instance;
}
```





```
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
