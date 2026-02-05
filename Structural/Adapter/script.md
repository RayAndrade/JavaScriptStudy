
## 🔌 What Is the Adapter Design Pattern?

The **Adapter** pattern is a structural pattern that acts like a **translator** between two incompatible interfaces, allowing classes or code that otherwise couldn’t work together to cooperate.

Think of it like a power plug adapter: your phone has a USB-C cable, the wall socket is Type-A — the adapter lets them connect without changing either the phone or the socket.


## 🤔 Why Would I Use It?

* When you have existing classes that **does’t match** a required interface but you cannot (or do not want to) change them.
* When you need to integrate **legacy code** with a modern system.
* When third-party libraries use a different interface than what your code expects.

---

## ✅ Benefits of the Adapter Pattern

* Promotes **reusability** of existing code without rewriting it.
* Makes systems more **flexible** by connecting otherwise incompatible parts.
* Reduces duplication by centralizing the conversion logic in one place.

## 🧩 Summary

The Adapter pattern is all about **compatibility**:

> “I can’t change my existing system, but I still want these parts to talk to each other.”

It gives you a **bridge** between mismatched components, keeping your system clean, maintainable, and consistent.

