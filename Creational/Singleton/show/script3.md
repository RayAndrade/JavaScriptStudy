
```
const Singleton = (function() { /**/ })();
```

```
{
    /**/
    return {
    };
}
```




```
    let instance;
    /**/
```



```
    function init() {
        const privateRandomNumber = Math.random();
    }

```


```
        function privateMethod() {
            console.log("Private method called");
        }

```






```
        return {
            
        };

```




```
publicMethod: function() {
                console.log("Public method called");
                privateMethod();
            }
```


```
,getRandomNumber: function() {
                return privateRandomNumber;
            }
```



```
    getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
```
