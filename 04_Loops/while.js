// while loop

let index= 0
while (index <= 10) {
    // console.log(`value ${index}`)
    index = index + 2  // condition to teminate loop
    
}

// =======  array in while loop =====

let myarr = ["man", "woman", "boy", ]

let arr = 0
while (arr <myarr.length) {
    // console.log(`lenght ${myarr[arr]}`)
    arr = arr + 1
}



// ============= Do while loop ================

// kam pehle then condition


let score = 1

do {
    // console.log(`value ${score}`)
    score++
} while (score < 10);


// ============= for of loop ===========
 

// forof with 

const array = ["ab", "cd"]

for (const num of array) {
    // console.log(`value ${num}`)
}


//  without array
const string = "Hello word"

for (const num of string) {
    // console.log(`value ${num}`)
}

// ============  map ============
const map = new Map()
map.set('IN', "india")
map.set('USA', 'America')
// console.log(map)


//=== map used in forof loop ===

for (const [key, value] of map) {
    // console.log(key ,":-", value)
}


//==   forof loop not work in object ==========


//==   forIn loop work in object ==========

const myObject = {
    js:"javascript",
    cpp:"c++"

}

for (const num in myObject) {
    // console.log(`${num} is shortcut of ${myObject[num]}`)
    
}

//==   forIn loop work in array ========== 

//  display key direact not value

const myArr = ["js", "txt", "cpp"]

for (const num in myArr) {
    console.log(`${myArr[num]}`)
   
}