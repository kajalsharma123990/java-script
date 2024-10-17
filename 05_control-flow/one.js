// const userLoggedIn = true

// if(2 == 2){  //check condition  if(2==2){}
//     // console.log("execute")
// // use true execute statment 
// }



// for example checking temperature

// const temp = 41
// if(temp === 50){   // when we need to not check less greater equal then use ====(strictly check)
//     console.log("yes ")
// }
// else{
//     console.log("no ")
// }


// =========== scope =======  var , const , let 
const score = 200
if(score > 100){
    let power = "fly"
    // console.log(`Power : ${power}`)
}
// console.log(`Power : ${power}`)


// =============== shorthand notation ==============

// implicite scope  
// const balance = 2000
// if(balance > 500) console.log("yes")



// =================== nested ===============

const balance = 1000

if(balance < 500){
    console.log("less than")
}else if(balance < 750){
    console.log("less than")
}
else if(balance < 950){
    console.log("less than")
}else{
    console.log("less than 1200")
}

//          ============= check two statement ==========
const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromGithub = true

if(userLoggedIn && debitCard && 2==2){     // true all condition then executure
    console.log("Allow User")
}
if(loggedInfromGoogle || loggedInfromGithub ){     // true one condition then execute
    console.log("Allow User")
}