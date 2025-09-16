
import AbstractExpression from "./AbstractExpression.js";

class TerminalExpression extends AbstractExpression {
    constructor(number) {
        super();
        this.number = number;
    }
    interpret(context) {
        return this.number;
    }
}

export default TerminalExpression;