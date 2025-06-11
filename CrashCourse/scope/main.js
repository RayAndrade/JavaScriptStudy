let a = 10
function outer(){
    let b = 20
    function inner(){
        let c = 30
        console.log(a, b, c)
    }
    inner()
}
outer()

// https://www.youtube.com/watch?v=R9I85RhI7Cg&t=919s
