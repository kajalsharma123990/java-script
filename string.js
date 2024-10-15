// string declearation in simple way

let userName = "kajal"
let repoCount = 5

// console.log(`user name is ${userName} and repo count is ${repoCount}`)



const value = new String("kajal")
// console.log(value[1])   key value access  

// console.log(value.charAt(2)) character position
// console.log(value.toLocaleUpperCase()) upercase


//  ===========  subString =========
// display reverse keyword
const newString = value.substring(2, 5)
// console.log(newString)


//  ==========  slice ===========
// not display reverse keyword
const anotherString = value.slice(-2, 5)
// console.log(anotherString)


//  ==========  Trim =======  used to remove extra space

const name = "   kajal   "

console.log(name.trim())
console.log(name)


// ======= Replace method =====

const url = "https://kajalsharma%20.com"
console.log(url.replace("%20", "123990"))

