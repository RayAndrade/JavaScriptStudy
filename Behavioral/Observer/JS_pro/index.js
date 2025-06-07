
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
    Observer.prototype = {
        update: function(data) {
            console.log(this.name + " received data: " + data);
        }
    };
}
Observer.prototype = {
    update: function(data) {
        console.log(this.name + " received data: " + data);
    }
};
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
        // Purpose: receive notification from subject, and handle incoming data
        console.log(this.name + " received data: " + data);
    }
};




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


