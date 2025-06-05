
```
/* at the top 1 */
function Subject() {
    this.observers = [];
}
/* 2 */
```

```
     /* 2 */
     subscribe: function(observer) { /* 3 */ },
```


```
        /* 3 */
        this.observers.push(observer);
        /* 4 outside this block */
```

```
    /* 4 */
    unsubscribe: function(observer) { /* 5 */ },
```

```
```

