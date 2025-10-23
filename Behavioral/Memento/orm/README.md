### **Memento Pattern (GoF Participants)**

**1. Memento**
• Stores the internal state of an object at a specific moment in time.
• Protects that state so it can be restored later without exposing details.
• Think of it like a snapshot that saves your app’s progress so you can roll back if needed.

**2. Originator**
• Creates a memento containing its current state.
• Can use that memento later to restore itself to a previous state.
• It’s like a text editor that remembers what your document looked like before you hit “undo.”

**3. Caretaker**
• Keeps track of mementos but never looks inside them.
• Requests saves and restores from the originator when needed.
• It’s like a save manager that stores backups without knowing what’s inside the files.

---

Would you like me to create a **spoken-friendly story flow** next — describing how the Memento, Originator, and Caretaker interact like characters in a short teaching narrative?
