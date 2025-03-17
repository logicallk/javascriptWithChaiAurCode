/*three type of varriables in js 
1. varriables
2. let
3.const */

const accountId=12345
let accountEmail= "abc@gmail.com"
var accountPassword=1234
accountCity="Jodhpur"  //note that you can do like this but it is bad to do 

let accountState   //when you declear variable but not assign value so by default in js it is undifined

//accountId=111  //it is not allowed beacouse of const type
accountEmail="a@gmail.com"
accountPassword="421"
accountCity="dhuel"

/* 
do not prefer var 
beacause of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])