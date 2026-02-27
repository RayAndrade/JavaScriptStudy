Structural Pattern — Adapter for JavaScript Students

Target
Defines the interface the Client expects to use.
Represents the standard way objects should behave.
Used directly by the Client.

Client
Works with objects through the Target interface.
Does not know about Adaptee’s interface.
Uses Adapter to interact with Adaptee.

Adaptee
Has an existing interface that is incompatible with Target.
Contains useful behavior the Client needs.
Cannot be changed easily.

Adapter
Implements the Target interface
Translates Client requests into Adaptee calls.
Connects incompatible interfaces safely.
