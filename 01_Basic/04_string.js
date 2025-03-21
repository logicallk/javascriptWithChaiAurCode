//string concepts

let Name="Lokesh"
let age=22

//console.log(Name.substring(0,2))
//console.log(Name + age + "19 Aug")

//or

//console.log(`My Name is ${Name} and my age is ${age} `)

let Branch=new String("Computer") //in both type of string declearation you can access string character with there respective key and apply different methods on it
console.log(Branch)
console.log(Branch.__proto__) //it is the prototype of string means method available for operation in it are include in this object
///you can see better it on browser console  by declearing like this let Branch=new String("Computer") and access Branch

console.log(Branch.length); //use for string length finding
console.log(Branch.charAt(2)); //use for check which character is that perticular index
console.log(Branch.indexOf('m'));// use for check perticular character index check
console.log(Branch.toUpperCase());//use to make lower case charater in upper case
console.log(Branch.substring(0,4));//to make substring from original string
console.log(Branch.substring(-8,4));
//note : in sustring prototype of string you cannot substring using negative index you can give negative index but its treat it as zero index
console.log(Branch.slice(0,4));//same as sustring but same change in it
console.log(Branch.slice(-8,-4));//it is work in slice






let email=new String("lokesh@gmail.com")
let newString=email.split('@') //use to split at perticular character
console.log(newString);

console.log(email.includes("gmail"));//use to check perticular string have this part or not which we want check









