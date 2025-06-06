

start : 1
```
function Subject() {
    this.observers = [];
}
```
2 is next line

```
subscribe: function(observer) { /* 3 */ },
```
3 iside as noted

3
```
        this.observers.push(observer);
```
4 outside this block

4
```
    unsubscribe: function(observer) { /* 5 */ },
```
5 inside as noted

5
```
        this.observers = this.observers.filter(function(item) {
            return item !== observer;
        });
```
next 6

6 next
```
     notify: function(data) {
        this.observers.forEach(function(observer) {
            observer.update(data);
        });
    }
```
7 past '}' 


7
```
function Observer(name) {
    this.name = name;
}
```
8 next line

8
```
Observer.prototype = {
    update: function(data) {
        console.log(this.name + " received data: " + data);
    }
};
```
done

code check
```
function Subject() {
    this.observers = [];
}

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

function Observer(name) {
    this.name = name;
}

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


