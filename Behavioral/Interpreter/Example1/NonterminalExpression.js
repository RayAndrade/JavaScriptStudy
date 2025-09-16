
import AbstractExpression from "./AbstractExpression.js";

class NonterminalExpression extends AbstractExpression {
    constructor(left, right, operator) {
        super();
        this.left = left;
        this.right = right;
        this.operator = operator;
    }

    interpret(context) {
        const leftResult = this.left.interpret(context);
        const rightResult = this.right.interpret(context);

        if (this.operator === "+") {
            return leftResult + rightResult;
        } else if (this.operator === "-") {
            return leftResult - rightResult;
        } else {
            throw new Error("Unsupported operator: " + this.operator);
        }
    }
}
export default NonterminalExpression;