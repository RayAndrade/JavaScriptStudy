

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
