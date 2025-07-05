// Subject.js

// Subject defines a common interface for RealSubject and Proxy
class Subject {
    request() {
        throw new Error("request() must be implemented by subclasses");
    }
}

module.exports = Subject;
