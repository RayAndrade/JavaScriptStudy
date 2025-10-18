

### **Command Pattern (GoF Participants)**

**1. Command**
• Declares an interface for performing an action.
• It defines the “execute” step but doesn’t say how it’s done.
• Think of it like a button that knows *what to do*, but not *how it’s done*.

**2. ConcreteCommand**
• Implements the action using a specific receiver.
• When the command runs, it tells the receiver what to do.
• It’s like a script that calls the right function at the right time.

**3. Client**
• Creates a command and gives it the right receiver.
• It decides what commands should exist, but doesn’t execute them directly.
• Think of it as setting up all the pieces before pressing “Run.”

**4. Invoker**
• Holds and triggers the command.
• When the invoker calls “execute,” the command performs its action.
• It’s like clicking a button or calling a function that runs a stored task.

**5. Receiver**
• Knows how to actually perform the requested work.
• The command tells it what to do, and it does the real job.
• It’s the worker behind the scenes that makes things happen.

---

Would you like me to generate a **matching Option A–style (spoken-friendly pseudocode)** explanation next — so you have both the *verbal* and *visual* versions ready for class?

