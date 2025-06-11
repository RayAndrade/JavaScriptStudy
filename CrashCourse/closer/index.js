// 8:27

function outer(){
    let counter = 0
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
