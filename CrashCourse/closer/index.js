// https://youtu.be/R9I85RhI7Cg?si=VXgff_gSNPyOch14&t=504

function outer(){
    let counter = 7
    function inner(){
        counter ++
        console.log(counter)
    }
    return inner
    //inner()
}
//outer()
//outer()


const  fn = outer()
fn()
fn()

// End at 16:11
