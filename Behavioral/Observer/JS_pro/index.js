function Subject() {
    this.observers = [];
}

//Attach methods to Subject's prototype (shared among all instances)

Subject.prototype = {
    subscribe: function(observer) {
        this.observers.push(observer);
    },
    unsubscribe: function(observer) {
        this.observers = this.observers.filter(function(item) {
            return item !== observer;
        });
    }
}