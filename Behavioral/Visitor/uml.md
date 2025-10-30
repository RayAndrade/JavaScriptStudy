

### **Visitor Pattern (GoF Participants)**


**6. Client**
• Creates the visitors and the elements.
• Tells the object structure to accept the visitor, starting the visiting process.
• It’s the host who invites the guest and opens the door for the tour to begin.


**1. Visitor**
• Declares a visit method for each type of element that can be visited.
• It defines what actions can be performed on those different element types.
• Think of it as a guest who knows exactly how to interact with each kind of room in a house.

**2. ConcreteVisitor**
• Implements the actions to perform on each specific element type.
• Each visitor represents a different operation you can apply across elements.
• It’s like one guest who takes photos of every room, while another writes a cleaning report.

**3. Element**
• Declares an accept method that takes a visitor as an argument.
• This allows the visitor to access and operate on the element.
• It’s like a room saying, “Welcome in — do your thing.”

**4. ConcreteElement**
• Implements the accept method to call the right visit operation on the visitor.
• Contains the actual data that the visitor will work with.
• It’s the real room with furniture and details that the visitor interacts with.

**5. ObjectStructure**
• Holds a collection of elements that can be visited.
• Provides a way to iterate through them and apply a visitor to each.
• It’s like a house manager who leads the guest through every room to do their job.

