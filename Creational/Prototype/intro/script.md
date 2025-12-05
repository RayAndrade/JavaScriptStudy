
🧬 What Is the Prototype Pattern?
🎯 In simple terms:
The Prototype pattern lets you clone existing objects instead of creating new ones from scratch.

Rather than saying:

“Build me a new object from zero,” you say: “Give me a copy of this one — and I’ll tweak it if needed.”

It’s like duplicating a document template or making a copy of your character in a game to save time.

🧩 When Should You Use It?
When creating an object is expensive or complicated.
When you want to avoid duplicating setup logic.
When you want new objects to be based on the configuration of existing ones.
🧪 Real-World Analogy
Imagine you're creating custom avatars in a game.

You’ve got a base character already set up:

⚔️ Knight with armor
🛡️ Shield
🎒 Inventory
Rather than building a new avatar from scratch for each player, you clone the original and then let the player change the hair, name, or weapon.

You saved time and reused the setup — this is the Prototype pattern.

🧠 Key Concepts
Term	Explanation
Prototype	The original object that can be cloned
Clone Method	A method that creates a copy of the object
Client	Code that uses the prototype to make copies
In JavaScript, this idea is baked into the language — every object has a prototype, and you can clone using methods like Object.create().

🔄 What Makes It Different?
Unlike the Factory Method or Builder:

The Prototype pattern doesn’t construct an object from parts.
It copies an existing, fully-initialized object, including its structure and behavior.
You’re saying:

“This object works — give me another one just like it.”

🧠 Summary
Feature	Description
Goal	Clone objects instead of rebuilding them
When	You have existing objects that serve as templates
Why	Saves time, avoids duplicate code, supports dynamic object creation
Bonus	Built-in support in JavaScript via object prototypes and cloning
