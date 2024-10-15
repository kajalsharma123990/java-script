const score = 200
// console.log(score)


const balance = new Number(100)
// console.log(balance.toString().length)  // 3

// console.log(balance.toFixed(2)) // 100.00



// ========= Precision ============= 
const value = 45.496
// console.log(value.toPrecision(2))

// ======= Localstring =======
const hundreds = 234563
// console.log(hundreds.toLocaleString("en-IN"))










// +++++++++++  Maths ++++++++++++++++ 

// abs  
// console.log(Math.abs(-4)) //4
// console.log(Math.floor(4.5)) // give lowest value 4
// console.log(Math.round(4.5)) //roundof 5
// console.log(Math.ceil(4.5))  // top value 5


console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1)
const min = 10
const max = 20 

console.log(Math.floor(Math.random()*(max - min + 1 )+ min))