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
    notify: function (data) {
        this.observers.forEach(function (observer) {
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