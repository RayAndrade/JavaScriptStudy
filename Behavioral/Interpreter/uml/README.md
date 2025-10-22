
### **Interpreter Pattern (GoF Participants)**

**1. AbstractExpression**
• Declares a common interface for all expression types.
• It defines how each expression should be interpreted.
• Think of it as setting the rulebook that every expression must follow.

**2. TerminalExpression**
• Handles the simplest, indivisible parts of the language.
• Each one directly interprets a basic symbol or token.
• It’s like understanding single words in a sentence.

**3. NonterminalExpression**
• Represents expressions made of smaller expressions.
• It combines and interprets other expressions using specific grammar rules.
• It’s like understanding full sentences made from individual words.

**4. Context**
• Holds information that the interpreter needs while processing.
• Keeps track of variables, current state, or shared data.
• It’s like the notepad where meanings and references are stored during interpretation.

**5. Client**
• Builds the expression tree that represents the grammar.
• Uses the context and the interpreter to evaluate or process a statement.
• It’s the one that says, “Here’s what to interpret — go make sense of it.”
