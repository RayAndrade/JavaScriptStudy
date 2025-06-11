
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.privateRandomNumber = Math.random();
        /**/
    }
    getRandomNumber() {
        return this.privateRandomNumber;
    }
    
}