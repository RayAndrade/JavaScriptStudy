// index.js

const FlyweightFactory = require('./FlyweightFactory');
const Client = require('./Client');

const factory = new FlyweightFactory();
Client.run(factory);

