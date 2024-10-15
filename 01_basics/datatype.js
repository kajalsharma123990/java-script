
// Primitive datatype

let score = 100 //number
let name = "abc"//string
let Isfollow = true //boolean
let outsideTemp = null  //null
let userEmail;  //undefined
let id = Symbol('123') //symbol

let bigNumber = 1234586424554562n //bigInt


//Non primitive  datatype

// Array

const student= ["name", "RollNo"]

// object

const myObj = {
    name: "kajal",
    age:21,
}

//function

const myFunction = function(){
    // console.log("kajal")
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++
                        // Memory

let myName = "kajal"
let anotherName= myName
anotherName = "sharma"

console.log(anotherName)



//Heap memory  give original data 

let userOne = {
    email: "kajal@gmail.com"
}
let userTwo = userOne
userTwo.email = "one@gmail.com"
console.log(userTwo.email)