

const Singleton = (function () {
    let uniqueInstance;

    function init() {
        // Private members
        let value = Math.random();

        return {
            getValue: function () {
                return value;
            }
        };
    }

    return {
        getInstance: function () {
            if (!uniqueInstance) {
                uniqueInstance = init();
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
