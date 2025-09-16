
class AbstractExpression {
    interpret(context) {
        throw new Error("This method must be overridden by subclasses");
    }
}

export default AbstractExpression;