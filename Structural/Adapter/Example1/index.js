const Adapter = require('./Adapter');
const Client = require('./Client');

const adapter = new Adapter();
Client.execute(adapter);