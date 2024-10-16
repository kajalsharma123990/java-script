
//============================    object marge     ===================

const obj1 = {1:"a", 2:'b'}
const obj2 = {3:'c', 4:'d'}
const obj4 = {5:'c', 6:'d'}
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // object assign  return target object


// object spread
const obj3 = {...obj1, ...obj2, ...obj4}




// access key and values

const tinderUser = {}
tinderUser.name = "kajal",
tinderUser.email= "one@gmail.com"

// console.log(Object.keys(tinderUser))


// ======== object destructure ============
  const course = {
    coursename: "js",
    price : 200,

  }

  const {coursename : name} =course  //object destructure 
//   console.log(name)


