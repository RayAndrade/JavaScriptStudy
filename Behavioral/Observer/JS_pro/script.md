
Purpose: array to store all registered observers (subscribers)
```
function Subject() {
    this.observers = [];
}
/**/
```

Next

```
Subject.prototype = { 
      /**/
}; 
```
Purpose: add an observer to the list (registering it for future notifications)
```
subscribe: function(observer) {
        this.observers.push(observer);
    }/**/
```

Purpose: remove an observer from the list (unsubscribing it) => Purpose of loop: iterate through observers array, Keeps only those observers which are not equal to the one being unsubscribed
```
,
unsubscribe: function(observer) {
        this.observers = this.observers.filter(function(item) {
            return item !== observer;
        });
    }
```

Purpose: notify all current observers, passing them the updated data => Purpose of loop: iterate through each registered observer and call their update() method
```
,
    notify: function (data) {
        this.observers.forEach(function (observer) {
            observer.update(data);
        });
    }
```




outside


Constructor function for Observer (subscribing client) => Purpose: store a name identifier for each observer (to identify output)
```
function Observer(name) {
    this.name = name;
    // 
}
```

Attach methods to Observer's prototype (shared among all observer instances) => Purpose: receive notification from subject, and handle incoming data


```
Observer.prototype = {
    update: function(data) {
        console.log(this.name + " received data: " + data);
    }
};
```


Constructor function for Subject (the observable object that maintains the list of observers) => Purpose: array to store all registered observers (subscribers)

```
function Subject() {
    this.observers = [];
}
```


Attach methods to Subject's prototype (shared among all instances) =>  Purpose: array to store all registered observers (subscribers)
```
Subject.prototype = {
    subscribe: function(observer) {
        this.observers.push(observer);
    }
```

Purpose: remove an observer from the list (unsubscribing it) => Purpose of loop: iterate through observers array,Keeps only those observers which are not equal to the one being unsubscribed
```
,
    unsubscribe: function(observer) {
        this.observers = this.observers.filter(function(item) {
            return item !== observer;
        });
    }
```
Purpose: notify all current observers, passing them the updated data = > Purpose of loop: iterate through each registered observer and call their update() method
```
,
    notify: function (data) {
        this.observers.forEach(function (observer) {
            observer.update(data);
        });
    }
};
```

Constructor function for Observer (subscribing client)
```
function Observer(name) {
    this.name = name;
    // Purpose: store a name identifier for each observer (to identify output)
}
```

Attach methods to Observer's prototype (shared among all observer instances)

```
Observer.prototype = {

    update: function(data) {
        // Purpose: receive notification from subject, and handle incoming data
        console.log(this.name + " received data: " + data);
    }
};
```

// === Test Code ===

// Create new subject instance (the object being observed)


const subject = new Subject();

// Create multiple observer instances (clients who want to receive updates)
const observerA = new Observer("Observer A");
const observerB = new Observer("Observer B");
const observerC = new Observer("Observer C");

// Subscribe observers A, B, and C to the subject
subject.subscribe(observerA);
subject.subscribe(observerB);
subject.subscribe(observerC);

// Trigger notification: all current subscribers receive "First message"
subject.notify("First message");

// Unsubscribe observerB (it will no longer receive updates)
subject.unsubscribe(observerB);

// Trigger second notification: observers A and C will receive "Second message"
subject.notify("Second message");

```
