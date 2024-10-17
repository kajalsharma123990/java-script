// truthy and falsy value

// const userEmail = "kajal@gmail.com"

// if(userEmail){
//     console.log("got user email")
// }
// else{
//     console.log("Don't have  user email")
// }

// falsy value = "" , 0, -0, null, undefined


// ========== check empty array ======
const userEmail = []
 if(userEmail.length ===0)
 {
    console.log(" empty array")
 }

// ========== check empty array ======
const emptyObj = []
 if(Object.keys(emptyObj).length ===0)
 {
    console.log(" empty object")
 }


 //============== Terniary operator ==============
 const price = 100
 price >= 80 ? console.log("less then") : console.log("more then ")