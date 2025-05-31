const Singleton = (function () {

    let uniqueInstance;  // modern: block-scoped

    function SingletonConstructor() {
        const value = Math.random();  // modern: constant once assigned

        return {
            getValue: function () {
                return value;
            }
        };
    }

    return {
        getInstance: function () {
            if (!uniqueInstance) {
                uniqueInstance = new SingletonConstructor();
            }
            return uniqueInstance;
        }
    };

})();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log("Singleton 1 value:", singleton1.getValue());
console.log("Singleton 2 value:", singleton2.getValue());
console.log("Are both instances equal?", singleton1 === singleton2);

At the Top
```
const Singleton = (function () { /* A */ })();
```
