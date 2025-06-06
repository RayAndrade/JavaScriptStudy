
step 1
```
function Subject() {
    this.observers = [];
}
```

return twice
```
Subject.prototype = {
    subscribe: function(observer) {
        this.observers.push(observer);
    },

    unsubscribe: function(observer) {
        this.observers = this.observers.filter(function(item) {
            return item !== observer;
        });
    },

    notify: function(data) {
        this.observers.forEach(function(observer) {
            observer.update(data);
        });
    }
};
```
done






done

code check
```
Move File…
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


