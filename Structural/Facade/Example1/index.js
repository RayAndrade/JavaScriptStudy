const Facade = require('./Facade');
const Client = require('./Client');

const facade = new Facade();

Client.execute(facade);
