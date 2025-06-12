// https://youtu.be/R9I85RhI7Cg?si=IyEmnXjVHsM-eBs_&t=972

function sum(a, b, c) {
    return a + b + c
}
console.log(sum(2,3,5))
// we get 10

function curry(fn){
    return function (a) {
        return function (b){
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}
const curriedSum= curry(sum)
console.log(curriedSum(2)(3)(5))

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)

console.log(add5)