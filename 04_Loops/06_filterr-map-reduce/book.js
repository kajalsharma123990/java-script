// filter example 


const books=[
    {
        title:"Book one", genre:'Fiction', publish:1981, edition:2004
    },
    {
        title:"Book two", genre:'Non Fiction', publish:1983, edition:2005
    },
    {
        title:"Book three", genre:'History', publish:1984, edition:2006
    },
    {
        title:"Book three", genre:'History', publish:1983, edition:2006
    },
    


]

let userBook= books.filter((bk)=>bk.title === 'Book three')
userBook= books.filter((bk)=> {
    return bk.publish <= 1983 
   
})
// console.log(userBook)


// ================  chaning  used multiple times map and filter ===========

const myNum = [1,2,3,4,5,6,7,8]

const newNum = myNum.map((num)=>num *10)
.map((num)=> num +1)
.filter((num)=> num >= 40)

// console.log(newNum)


// =============== Reduce method ================

const val = [1,2,3,4,5,6,7]

// const sum =val.reduce(function(acc, currVal) {
//     return acc + currVal
// }, 0)


// ============== similar but using arrow ===============
const sum = val.reduce((acc, currVal)=>acc + currVal, 0)
// console.log(sum)




const cart = [
    {
        itemName:'javaScript',
        price:999
    },
    {
        itemName:'data science',
        price:999
    },
]

const totalprice = cart.reduce((acc,item)=>acc+ item.price,0)
console.log(totalprice)