
let obj = {
    1000 : "hello",
    "apple" : 10,
    "mango" : 20,
    "lichi" : 30,
    "cherry" : 40,
    "banana" : 50,
    "water melon" : 60,
}

// console.log(obj."water melon")
// limitation of dot syntax:
// 1: only keys which are valid identifiers can be accessed

let t = "lichi"

// console.log(obj.lichi) // 30 
console.log(obj.t) 
// It cannot access varibales

// [] => square bracket syntax


// console.log(obj["water melon"])
// console.log(t) // lichi
// console.log(obj["t"])
// console.log(obj[t]) // 30

// let obj = {
//     1000 : "hello",
//     "apple" : 10,
//     "mango" : 20,
//     "lichi" : 30,
//     "cherry" : 40,
//     "banana" : 50,
//     "water melon" : 60,
//     "t" : 100
// }
// console.log(obj.1000)
// console.log(obj["1000"])


// obj[1000] = "ramesh"



// let 1000 = "ramesh"