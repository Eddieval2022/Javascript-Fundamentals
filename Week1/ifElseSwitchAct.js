// Activity 1


let age = 16


if (age >= 17)
    console.log("Yes i can serve you");
        
else console.log (" You aren't old enough.")
        
         
// Activity 2

let topping = "Sausage"

switch(topping) {
    case "Cheese":
    case "Pepperoni":
    case "pineapple":
    console.log("These are important ingredients for my pizza")
    break;
    case "Ham":
    case "olives":
    case "peppers":
    console.log(`I dont mind having ${topping} on my pizza `)
    break;
    case "Tomato":
    case "Liver":
    case "Sausage":
    console.log(`${topping} should not be on a pizza`)
}

// Activity 3


let password = "Codinglong";

if(password.length < 7)
console.log ("The entered password is too short");
    
else console.log(`Password is ${password}`);

// Activity 4

let num = 13

if (num % 5 === 0 || num % 3 === 0){
console.log("This number is divisable by 3 and 5");
}

else {console.log("This number is NOT divisable by 3 and 5")};

// Activity 5

// If/else solution
let num1 = 15

if (num1 % 3 === 0 || num1 % 5 === 0){
    console.log("Fizz Buzz")
}
else if (num1 % 5 === 0){
    console.log("Buzz")
}
else if (num1 % 3 === 0){
    console.log("Fizz")

}
else {console.log( `${num1}`)}

// Switch solution

let num2 = 15;

switch(true) {
  case num2 % 5 == 0 && num2 % 3 == 0:
    console.log("Fizz Buzz.")
    break;
  case num2 % 3 == 0:
    console.log("Fizz.")
    break;
  case num2 % 5 == 0:
    console.log("Buzz.")
    break;
  default:
    console.log("This number is not divisble by 3 or 5.")
}

// Activity 6

// let num3 = 123321

// let reversedNum = num3.reverse();

// if (num3 === reversedNum){
// console.log("Yes");

// }

// else {console.log("No")};    doesnt work!


// // Answer

// let num4 = 123321;
// let numString = num4.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num4 === reverseNumString){
//     console.log(`Yes ${num4} is a palindrome`)
// } else {
//     console.log(`No ${num4} is not a palindrome`)
// }



// Activity 7

let time = 1300;
placeOfWork = "Manchester";
townOfHome = "Oldham";

if (time === 0700) {
    console.log (` It is 0700, I'm still in ${townOfHome}`)
}
else if (time === 0800) {
    console.log (`It is 0800, I'm on my way to work in ${placeOfWork} `)
}



