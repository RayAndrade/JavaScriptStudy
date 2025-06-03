

```
class Singleton { /**/ }
```

If an instance already exists, return that instance immediately
This prevents creating multiple instances — core behavior of Singleton

```
if (Singleton.instance) {
            return Singleton.instance;
        }/**/
```

A public method exposed to external callers.
Inside public method, we call the private-looking helper (still public in JS).
```
publicMethod() {
        console.log("Public method called");
        this.privateMethod();
    }/**/
```

A public getter function to retrieve the internal privateRandomNumber.
```
getRandomNumber() {
          return this.privateRandomNumber;
    }/**/
```

Technically, this is still a public method.
In pre-ES2022 JS, private methods are often faked by naming convention (e.g., _privateMethod).

```
privateMethod() {
        console.log("Private method called");
    }
```
