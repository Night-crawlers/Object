// q1:
let student = {
    name: "Rahul",
    age: 21,
    courses: ["Math", "Physics"]
};

//  remove "Physics" course
// add "Chemistry" course
// student.courses.pop()
// console.log(student.courses)
// let arr = student.courses

// arr.pop()
// arr.push("Chemistry")

// console.log(student)


// q2:
let library = {
    name: "City Library",
    address: "123 Main St",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
};

// print the book whose author is "George Orwell"

// let arr  = library.books

// for(let  t of arr){
//     // console.log(t.author)
//     if(t.author === "George Orwell"){
//         console.log(t.title)
//     }
// }



let cart = {
    owner: "Abhishek",
    items: [
        { name: "Laptop", price: 50000, quantity: 1 },
        { name: "Mouse", price: 500, quantity: 0 },
        { name: "Keyboard", price: 1000, quantity: 2 },
        { name: "Monitor", price: 10000, quantity: 1},
        { name: "wires", price: 100, quantity: 0 },
    ]
};


//  remove all item from cart if quantity is zero

// if(q == 0){
//     arr.pop()
// }
let arr = cart.items
for(let i = 0; i<=arr.length-1; i++){
    if(arr[i].quantity==0){
        arr.splice(i,1)
    }
}

console.log(cart)



// calculate the total price of all items in cart
// let sum = 0 
// for(let t of arr){
//    sum = sum+ t.quantity*t.price
// }
// console.log(sum)



// q4: 

// create an array of object , each objects will have name and age of a person
// print the name of the person who are eligible to vote (age >= 18)





// Callbacks && HOFs (1.5 hrs to teach)
// Dom =>