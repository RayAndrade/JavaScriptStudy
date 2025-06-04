
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
