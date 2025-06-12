
// https://youtu.be/R9I85RhI7Cg?si=jFhWtZ5PUnkwXcdY&t=1355

function sayMyName(name) {
    console.log(`My name is ${name}`)
}

// notice {}
// sayMyName('Ray')

// How to determine 'this'?
// Implicit Binding

/*
const person = {
    name: 'Raymond',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    }

}
*/

// person.sayMyName()

// Explicit Binding
// sayMyName.call(person)

// New Binding
function Person(name){
    // this = {}
    this.name = name
}

const p1 = new Person('Ray')
const p2 = new Person('Cecil')

console.log(p1.name, p2.name)

//const name = 'global scope'
// Default Binding
console.log(p2.name)

sayMyName(p2.name)
























