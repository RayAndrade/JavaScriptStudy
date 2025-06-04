const Singleton = (function() {
    {
        let instance;
        function init() {
            const privateRandomNumber = Math.random();
        }
        function privateMethod() {
            console.log("Private method called");
        }

        return {
        };
    }
})();