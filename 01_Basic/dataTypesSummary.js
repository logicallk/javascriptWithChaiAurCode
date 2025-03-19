// Basically data type in js is two type one is primitive and another is non primitive or refernce
//this type is based on how it store in memory and how its access 
//like call by value and call by referance

//1) Primitive 
/*
dataTpe ==> there return type

  number=>number
  string=>string
  boolean=>boolean
  null=>object
  undefined => undefined
  bigInt => bigint
*/

const count=101
const name="Lokesh"
const marks=70.40
const isPassed=true
const attendunce=null
let feeStatus;
let bigintNumber=123456789987654n

console.log(typeof (count));
console.log(typeof (name));
console.log(typeof (marks));
console.log(typeof (isPassed));
console.log(typeof (attendunce));
console.log(typeof (feeStatus));
console.log(typeof (bigintNumber));


//2) Non Primitive
/*
   DataType ===>  return type

   function ==> function (object function)
   object ==> object
   array ==> object
*/

let heros=["lokesh","Mitesh","Digvijay","Saurav"]
console.log(typeof (heros));

let myObject={
    Name : "Lokesh",
    age: 20,
    city : "Jalgaon"
}

console.log(typeof (myObject));

const myFunction=function(){
    console.log("Hi it is function")
}

myFunction()
console.log(typeof (myFunction));
