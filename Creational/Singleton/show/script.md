```
const Singleton = ( /**/
})();
```




```
function() {

    return {

    };
```


```
        let instance;
```


```
        function init() { 
             /*x*/
        


        return {

        };
    }
```

```
        const privateRandomNumber = Math.random();/*x*/
```



```
        function privateMethod() {
            console.log("Private method called");
        } /* toto return */
```


```
         publicMethod: function() {
                console.log("Public method called");
                privateMethod();
            } /*x*/
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
