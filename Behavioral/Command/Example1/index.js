
import { Receiver } from './Receiver.js';
import { ConcreteCommand } from './ConcreteCommand.js';
import { Invoker } from './Invoker.js';

const receiver = new Receiver();

const command = new ConcreteCommand(receiver);

const invoker = new Invoker();

invoker.setCommand(command);

invoker.executeCommand();

