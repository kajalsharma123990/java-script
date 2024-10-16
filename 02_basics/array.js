// Array

const myArray1 = [0,1,2,3,4,5]
const myArray2 = new Array(1,2,3,4)
// console.log(myArray2[2])


//Array Method  
//push   add value
//pop remove value
// myArray2.pop()
// myArray2.shift() remove first value



// console.log(myArray2.includes(9))  //false  or true
console.log(myArray2.indexOf(5))  // exist value or not

const myarr= new Array(1,2,3,4,5,6)
const newarr = myarr.join()
// console.log(typeof newarr)
// console.log(myarr)

console.log("A" , myarr)

const mynarr = myarr.slice(1,3)
console.log(mynarr)

console.log("B" , myarr)

const mynarr2 = myarr.splice(1,3)
console.log(mynarr2)
console.log("c" , myarr)