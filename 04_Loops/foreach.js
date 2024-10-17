// =========== for each loop in function ========


const arr = ['js', 'cpp', 'txt']

arr.forEach(element => {
    // console.log(element)
});


// ============ for each loop in arraow function ======
const arrow = ['js', 'cpp', 'txt']

arrow.forEach((num)=>{
    // console.log(num)
})

// ============ for each loop in arraow function also check index anfd array value ======
const val = ['js', 'cpp', 'txt']

val.forEach((num, index, arr)=>{
    // console.log(num, index, arr)
})











//=============== object access  =========
const myCoding = [
    {
        value:"java",
        
        
    },
    {
       
        value:"js",
        filename:"java",
    },
    {
        value:"c++",
        filename:"cpp",
        
    },
   

  
]
myCoding.forEach((item)=>{
// console.log(item)
// console.log(item.value)// access object 
})






// ================== filter ============

const myNum = [1,2,3,4,5,6,7,8]

// const newNum = myNum.filter((num)=>num > 4)
// console.log(newNum)

// ============= In filter when use scope use return key word ========
// const newNums = myNum.filter((num)=>{
//    return num > 4
    
// })
// console.log(newNums)

// =========  using foreach access value =============

const newNums =[]
myNum.forEach((num)=>{
if(num>4){
    newNums.push(num)
}
})
console.log(newNums)
