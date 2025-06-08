

**01**
```
const Singleton = ( /* 2 */
})();
```


**02**
```
function() {
    return {

    }; /* 3 */
```


```
        /* 3 */
        let instance;
        /* 4 */
```


```
        /* 4 */
        function init() { 
             /* 5 */
        


        return {

        };
    }
```

```
        /* 5 */
        const privateRandomNumber = Math.random();/* 6 */
```



```
        /* 6 */
        function privateMethod() {
            console.log("Private method called");
        } /* toto return */
```


```
         publicMethod: function() {
                console.log("Public method called");
                privateMethod();
            } /* 7 */
```



```
           ,
            getRandomNumber: function() {
                return privateRandomNumber;
            }
            /* goto last return */
```



**Last Paste**
```
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
```
