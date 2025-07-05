// index.js

const Proxy = require('./Proxy');
const Client = require('./Client');

// create the proxy
const proxy = new Proxy();

// run the client
Client.execute(proxy);


console.log('TheRayCode is AWESOME!!!');