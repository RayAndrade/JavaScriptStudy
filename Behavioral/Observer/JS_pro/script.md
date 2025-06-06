
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
    },
```
Purpose: notify all current observers, passing them the updated data => Purpose of loop: iterate through each registered observer and call their update() method
```
    notify: function (data) {
        this.observers.forEach(function (observer) {
            observer.update(data);
        });
    }
```





Constructor function for Observer (subscribing client)
```
function Observer(name) {
    this.name = name;
    // Purpose: store a name identifier for each observer (to identify output)
}
```


Attach methods to Observer's prototype (shared among all observer instances)
// Purpose: receive notification from subject, and handle incoming data
```
Observer.prototype = {
    update: function(data) {
        console.log(this.name + " received data: " + data);
    }
};
```
