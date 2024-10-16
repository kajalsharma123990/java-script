

// function defination
function sayMyname () {
    console.log("hi")
    console.log("h")
}

// function execution after function name use ()
// sayMyname()

// function addTwoNumber (number1,number2){
// console.log(number1 + number2)
// }

// addTwoNumber("3", 4)


function addTwoNumber (number1,number2){
    
    return number1 + number2;
    }
    
    const result= addTwoNumber(3, 4)
    // console.log("Result", result)



  function loginUser(username){
      if(!username){
       console.log("Please enter user name")
       return
      }
      return `${username} just logged in`
    }
//    console.log (loginUser("kajal"))
    console.log(loginUser("kajal"))