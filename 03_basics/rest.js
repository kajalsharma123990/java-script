// use of rest operator

function calculatePrice (...num1){
    return num1
}
// console.log(calculatePrice(200, 300, 300))

 // pass object to function
const user ={
    name: "kajal",
    price:120

}
function handleObject (anyObject){
console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(user)


// pass array to function
const myNewArray = [1,2,3,4,5]

function handleArray(getArray){
    return getArray[2]
}
 console.log(handleArray(myNewArray))