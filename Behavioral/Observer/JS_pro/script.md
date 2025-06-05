
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
        this.observers = this.observers.filter(function(item) {
            return item !== observer;
        });
        /* next */
```

```
     notify: function(data) {
        this.observers.forEach(function(observer) {
            observer.update(data);
        });
    } /* past '}' */
```

```
function Observer(name) {
    this.name = name;
}
```

```
Observer.prototype = {
    update: function(data) {
        console.log(this.name + " received data: " + data);
    }
};
```


test
```
const subject = new Subject();

const observerA = new Observer("Observer A");
const observerB = new Observer("Observer B");
const observerC = new Observer("Observer C");

subject.subscribe(observerA);
subject.subscribe(observerB);
subject.subscribe(observerC);

subject.notify("First message");

subject.unsubscribe(observerB);

subject.notify("Second message");
```


