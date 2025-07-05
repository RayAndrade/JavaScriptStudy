// RealSubject.js

const Subject = require('./Subject');

// RealSubject contains the actual, expensive logic
class RealSubject extends Subject {
    request() {
        return "RealSubject: handling the request";
    }
}

module.exports = RealSubject;
