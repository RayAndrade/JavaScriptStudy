```
const Singleton = (function() { /**/ })();
```

error move to end
```
    let instance;
    function init() {
     /**/
```

```
      const privateRandomNumber = Math.random();
      /**/
```

```
    function init() {
        /* ? */
        return {

        };
    }
```


```
        const privateRandomNumber = Math.random();
       
```



```
        function privateMethod() {
            console.log("Private method called");
        } /* goto return */

```



```
```


```
            publicMethod: function() {
                console.log("Public method called");
                privateMethod();
            } /**/
```




Last Step
```
         getInstance: function() {
                if (!instance) {
                    instance = init();
                }
                return instance;
            }
```


redo
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
