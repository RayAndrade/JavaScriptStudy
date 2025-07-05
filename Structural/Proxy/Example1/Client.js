// Client.js

// Client uses a Subject interface
class Client {
    static execute(subject) {
        console.log(subject.request());
    }
}

module.exports = Client;
