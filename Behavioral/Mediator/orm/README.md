---

### **Mediator Pattern (GoF Participants)**

**1. Mediator**
• Defines how objects communicate without knowing each other directly.
• It acts as the central hub that routes messages or actions between colleagues.
• Think of it as a group chat moderator who makes sure everyone talks through one channel.

**2. ConcreteMediator**
• Implements the coordination logic between specific colleague objects.
• Knows who the colleagues are and how they should interact.
• It’s like the real manager who decides which team member should handle each message.

**3. Colleague classes**
• Each colleague knows only the mediator, not the other colleagues.
• They send and receive messages through the mediator instead of talking directly.
• Imagine coworkers who always pass notes through their manager rather than straight to each other.

---

Would you like me to write the **spoken-friendly pseudocode flow** next — showing how the Mediator directs communication step by step, like a classroom story?

