import Context from "./Context.js";
import TerminalExpression from "./TerminalExpression.js";
import NonterminalExpression from "./NonterminalExpression.js";

const context = new Context("5 + 3 - 2");

const five = new TerminalExpression(5);
const three = new TerminalExpression(3);
const two = new TerminalExpression(2);

const addExpr = new NonterminalExpression(five, three, "+");
const subtractExpr = new NonterminalExpression(addExpr, two, "-");

const result = subtractExpr.interpret(context);

console.log(`Expression: ${context.getInput()}`);
console.log(`Result: ${result}`);
