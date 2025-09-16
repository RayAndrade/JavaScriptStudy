
import { Command } from './Command.js';

export class ConcreteCommand extends Command {
    constructor(receiver) {
        super();
        this.receiver = receiver;
    }
    execute() {
        console.log('ConcreteCommand: Executing command via Receiver.');
        this.receiver.action();
    }
}