
export class Invoker {
    constructor() {
        this.command = null;
    }
    setCommand(command) {
        this.command = command;
    }
    executeCommand() {
        if (this.command) {
            console.log('Invoker: Triggering the command.');
            this.command.execute();
        } else {
            console.log('Invoker: No command has been set.');
        }
    }
}