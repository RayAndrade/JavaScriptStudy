// Proxy.js

const Subject = require('./Subject');
const RealSubject = require('./RealSubject');

// Proxy wraps RealSubject and controls access
class Proxy extends Subject {
    constructor() {
        super();
        this.realSubject = null; // initially no RealSubject created
    }

    request() {
        // lazy initialization
        if (!this.realSubject) {
            console.log("Proxy: creating RealSubject on demand...");
            this.realSubject = new RealSubject();
        }
        // possible permission checks, logging, etc could happen here
        console.log("Proxy: delegating request to RealSubject");
        return this.realSubject.request();
    }
}

module.exports = Proxy;
