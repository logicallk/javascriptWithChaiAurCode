let score=400

let count=new Number(100) 

// console.log(score)
// console.log(count);

// console.log(typeof(score));
// console.log(score.toString().charAt(1));//using .tostring() method you can apply all string opertion on number
// console.log(typeof(score));

let number1=1234.2323456789
//console.log(number1.toFixed(1)); //using it you can fix the number count after decimal

//console.log(number1.toPrecision(5));//it will count number from start and print upto you passed argument here like 5 so output is 1234.2

let numbwer2=1000000
//console.log(numbwer2.toLocaleString());//use for big number readblity increase like in this example 1000000 output for it 10,00,000

//++++++++++++++++++++++++++++++++Math Library+++++++++++++++++++++++++++++++++++++++++++++++++++

//console.log(Math);
let amount=1034.22
// console.log(Math.round(amount));//it will rount value as per math rule like if value is greater than 5 afther decimal than it increase its front number like 1.6 than 2 0r 1.4 than 1 like that
// console.log(Math.floor(amount));//it round up to lower value like here 1034.22 output is 1034
// console.log(Math.ceil(amount));//it  round into higher value like here 1034.22 output is 1035

let value =-19
// console.log(Math.abs(value));//it is give positive value of negative value

// console.log(Math.random());//it will give randam value always in between 0 and 1
// console.log(Math.random()*10);//when you multiply it by 10 power it will shift the decimal as per 10 power 
// console.log((Math.random()*10)+1)//we add 1 for not give 0 value
// console.log(Math.floor(Math.random()*10)+1)//for only out put non decimal value we use Math.floor()

let min=10
let max=20

//console.log(Math.floor((Math.random()*(max-min+1))+min));//this formula use for give random value in between min and max value
/*
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

 let num= getRandomInt(min,max)
 console.log(num);
 
 function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  
  let num1= getRandomIntInclusive(min,max)
  console.log(num1);
*/

/*
  function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

console.log(generatePassword(12)); // Example: "A1b@cD3!eF4"
*/











