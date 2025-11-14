### **1. Client**

Starts the chain by making a request.
Doesn’t worry about who will handle it — just give it to the first link in the chain.
Example: *“I need this done — whoever can handle it, please do.”*

---

### **2. Handler**

Sets the rule that every handler can either deal with the request or pass it along.
Keeps a reference to the next handler in the chain.
Think of it as *“If I can’t do it, I’ll ask the next person.”*

---

### **3. ConcreteHandler**

Knows how to handle specific types of requests.
If it recognizes the request, it takes care of it.
If not, it simply says *“Not mine — passing it on.”* and forwards it to the next handler.



