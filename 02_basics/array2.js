const heros =["abc", "def", "ghi"]
const dc_heros = ["xyz", "asd", "fgh"]

// heros.push(dc_heros)
// console.log(heros)


// concat method

const newHero = heros.concat(dc_heros)
// console.log(newHero)


// spride 

const allheros = [...heros, ...dc_heros]
// console.log(allheros)

//flat 
const real_arr = [1,2,3,[4,5],6,[7,8],9]
const simpel_arr = real_arr.flat(Infinity)
// console.log(simpel_arr)

const mysym = Symbol("key")
const obj = {
    name: "kajal",
    email:"one@gmail.com",
    age:21,
    [mysym]:"key"
}
// console.log(obj[mysym])
// console.log(obj["name"])
obj.email="kajal@gmail.com"
// console.log(obj["email"])
// console.log(obj.email)

//functions

obj.greeting= function(){
    // console.log("hi js user")
}
// console.log(obj.greeting())



