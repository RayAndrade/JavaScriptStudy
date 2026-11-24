Let’s focus on the **Mediator Pattern**, a behavioral pattern described in the GoF book on pages 273–282, with its UML on page 278.

✅ GoF participants you’ll see:

* **Mediator** (defines the interface for communicating colleagues)
* **ConcreteMediator** (coordinates communication)
* **Colleague** (base participant with a reference to the mediator)
* **ConcreteColleague** (concrete participant objects)
* **Client** (sets up colleagues and mediator)

---

**As you requested**, I will:
✅ explain each class outside the code block
✅ put code inside triple-backtick blocks with detailed line-by-line comments
✅ place each class in its own `.js` module
✅ add a working `index.js` demo
✅ in a GitHub-ready style

---

# 🧩 Class-by-Class Explanation

---

## 🧩 `Mediator.js`

**Purpose**
Defines the abstract interface for coordinating communication between colleagues.

```javascript
// Mediator.js

// Mediator defines the interface for coordinating colleagues
class Mediator {
    send(message, colleague) {
        throw new Error("send() must be implemented by subclasses");
    }
}

module.exports = Mediator;
```

---

## 🧩 `ConcreteMediator.js`

**Purpose**
Implements coordination logic, handling message routing between colleagues.

```javascript
// ConcreteMediator.js

const Mediator = require('./Mediator');

// ConcreteMediator: coordinates colleagues' communication
class ConcreteMediator extends Mediator {
    constructor() {
        super();
        this.colleague1 = null; // store reference to colleague1
        this.colleague2 = null; // store reference to colleague2
    }

    setColleague1(colleague) {
        this.colleague1 = colleague;
    }

    setColleague2(colleague) {
        this.colleague2 = colleague;
    }

    send(message, sender) {
        // check who sent the message
        if (sender === this.colleague1) {
            // colleague1 sends to colleague2
            this.colleague2.notify(message);
        } else {
            // colleague2 sends to colleague1
            this.colleague1.notify(message);
        }
    }
}

module.exports = ConcreteMediator;
```

---

## 🧩 `Colleague.js`

**Purpose**
Defines a base participant in the interaction. Holds a reference to the mediator.

```javascript
// Colleague.js

// Colleague holds a reference to the mediator
class Colleague {
    constructor(mediator) {
        this.mediator = mediator; // the mediator for communication
    }
}

module.exports = Colleague;
```

---

## 🧩 `ConcreteColleague1.js`

**Purpose**
A concrete colleague that can send and receive messages via the mediator.

```javascript
// ConcreteColleague1.js

const Colleague = require('./Colleague');

// ConcreteColleague1 communicates through the mediator
class ConcreteColleague1 extends Colleague {
    send(message) {
        console.log(`ConcreteColleague1 sends: ${message}`);
        this.mediator.send(message, this); // delegate to mediator
    }

    notify(message) {
        console.log(`ConcreteColleague1 receives: ${message}`);
    }
}

module.exports = ConcreteColleague1;
```

---

## 🧩 `ConcreteColleague2.js`

**Purpose**
Another concrete colleague using the same mediator.

```javascript
// ConcreteColleague2.js

const Colleague = require('./Colleague');

// ConcreteColleague2 communicates through the mediator
class ConcreteColleague2 extends Colleague {
    send(message) {
        console.log(`ConcreteColleague2 sends: ${message}`);
        this.mediator.send(message, this); // delegate to mediator
    }

    notify(message) {
        console.log(`ConcreteColleague2 receives: ${message}`);
    }
}

module.exports = ConcreteColleague2;
```

---

## 👤 `Client.js`

**Purpose**
Sets up the mediator, registers colleagues, and demonstrates communication.

```javascript
// Client.js

// Client sets up the mediator and the colleagues
class Client {
    static run() {
        const ConcreteMediator = require('./ConcreteMediator');
        const ConcreteColleague1 = require('./ConcreteColleague1');
        const ConcreteColleague2 = require('./ConcreteColleague2');

        // create mediator
        const mediator = new ConcreteMediator();

        // create colleagues
        const colleague1 = new ConcreteColleague1(mediator);
        const colleague2 = new ConcreteColleague2(mediator);

        // register colleagues with the mediator
        mediator.setColleague1(colleague1);
        mediator.setColleague2(colleague2);

        // colleagues communicate through the mediator
        colleague1.send("How are you?");
        colleague2.send("I'm good, thanks!");
    }
}

module.exports = Client;
```

---

## 🚀 `index.js`

**Purpose**
Runs the demonstration.

```javascript
// index.js

const Client = require('./Client');

// start the Mediator pattern demo
Client.run();
```

---

# ✅ Expected Output

```bash
ConcreteColleague1 sends: How are you?
ConcreteColleague2 receives: How are you?
ConcreteColleague2 sends: I'm good, thanks!
ConcreteColleague1 receives: I'm good, thanks!
```

---

# 📚 References

* *Design Patterns: Elements of Reusable Object-Oriented Software* (Gamma et al)
* Mediator Pattern, pages 273–282
* UML page 278
* Participants:

  * Mediator
  * ConcreteMediator
  * Colleague
  * ConcreteColleague
  * Client

---

# 🧠 Teaching Notes

✅ Emphasize how Mediator **decouples** colleagues, letting them interact without referring directly to each other
✅ Show how this can simplify **many-to-many** communication
✅ Extend to more colleagues or even build a **chat room** example


# TheRayCode | JavaScript Mediator — Classes and Variables

## 1. `Mediator`

**Class role:** Defines `Notify()`, the operation colleagues use to report a message. The base implementation throws an error so a subclass must provide the routing behavior.

**Instance variables:** None.

**Method parameters:**

- `sender` — The colleague object that sent the message.
- `message` — The value sent by the colleague. Both messages in this demo are strings.

## 2. `ConcreteMediator`

**Class role:** Extends `Mediator`. It registers the two colleagues through `SetColleagues()` and routes each message to the other colleague through `Notify()`.

**Instance variables:**

- `_colleague1` — Reference to the `ConcreteColleague1` instance.
- `_colleague2` — Reference to the `ConcreteColleague2` instance.

**Method parameters:**

- `colleague1` and `colleague2` — The two objects passed to `SetColleagues()`. The mediator stores them in `_colleague1` and `_colleague2`.
- `sender` — The object `Notify()` compares with its stored references to choose the recipient.
- `message` — The value passed to the recipient’s `Receive()` method.

## 3. `Colleague`

**Class role:** Base class for both concrete colleagues. Its constructor gives each colleague a reference to the mediator.

**Instance variable:**

- `_mediator` — Reference to the mediator that coordinates communication.

**Constructor parameter:**

- `mediator` — The object passed into the constructor and stored as `_mediator`.

## 4. `ConcreteColleague1`

**Class role:** Extends `Colleague`. `Send()` passes the message and `this` to the mediator. `Receive()` prints the message to the console.

**Instance variable:**

- `_mediator` — Inherited from `Colleague` and used to call `Notify()`.

**Method parameter:**

- `message` — The outgoing value in `Send()` or the incoming value in `Receive()`.

## 5. `ConcreteColleague2`

**Class role:** Extends `Colleague`. It uses the same send-and-receive behavior as `ConcreteColleague1` and represents the second participant in the GoF Structure diagram.

**Instance variable:**

- `_mediator` — Inherited from `Colleague` and used to call `Notify()`.

**Method parameter:**

- `message` — The outgoing value in `Send()` or the incoming value in `Receive()`.

## Variables in `index.js`

- `mediator` — The single `ConcreteMediator` instance shared by both colleagues.
- `colleague1` — The `ConcreteColleague1` instance that sends “Are you ready?”
- `colleague2` — The `ConcreteColleague2` instance that replies “Yes, I am ready.”

**Impress speaker note:** “The references show who knows whom. Each colleague stores `_mediator`. The mediator stores `_colleague1` and `_colleague2`. When a colleague sends a message, it passes `this` so the mediator can identify the sender and route the message.”


