//two type of memory Stack and Heap memory
// Stack memory use by primitive datatype and heap memory use by non primitive
//in stack memory copy of value is give to another variable when another variable change it original value does not change 
//but in Heap memory reference of value is give to another value so when change is happen it s happen in original value

//stcke memory example

let myName="Lokesh"
let Name=myName
Name="Patil"

console.log(myName)
console.log(Name)

//Heap Memory Example

let UserOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let UserTwo=UserOne
console.log(UserOne.email)
console.log(UserTwo.email)

UserTwo.email="lokesh@gmail.com"

console.log(UserOne.email)
console.log(UserTwo.email)

