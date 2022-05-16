// // Activity 1


// let age = 16


// if (age >= 17)
//     console.log("Yes i can serve you");
        
// else console.log (" You aren't old enough.")
        
         
// // Activity 2

// let topping = "Sausage"

// switch(topping) {
//     case "Cheese":
//     case "Pepperoni":
//     case "pineapple":
//     console.log("These are important ingredients for my pizza")
//     break;
//     case "Ham":
//     case "olives":
//     case "peppers":
//     console.log(`I dont mind having ${topping} on my pizza `)
//     break;
//     case "Tomato":
//     case "Liver":
//     case "Sausage":
//     console.log(`${topping} should not be on a pizza`)
// }

// // Activity 3


// let password = "Codinglong";

// if(password.length < 7)
// console.log ("The entered password is too short");
// else console.log(`Password is ${password}`);

// // Activity 4

// let num = 13

// if (num % 5 === 0 || num % 3 === 0){
// console.log("This number is divisable by 3 and 5");
// }

// else {console.log("This number is NOT divisable by 3 and 5")};

// Activity 5

// If/else solution
// let num1 = 15

// if (num1 % 3 === 0 || num1 % 5 === 0){
//     console.log("Fizz Buzz")
// }
// else if (num1 % 5 === 0){
//     console.log("Buzz")
// }
// else if (num1 % 3 === 0){
//     console.log("Fizz")

// }
// else {console.log( `${num1}`)}

// Switch solution

// let num2 = 15;

// switch(true) {
//   case num2 % 5 == 0 && num2 % 3 == 0:
//     console.log("Fizz Buzz.")
//     break;
//   case num2 % 3 == 0:
//     console.log("Fizz.")
//     break;
//   case num2 % 5 == 0:
//     console.log("Buzz.")
//     break;
//   default:
//     console.log("This number is not divisble by 3 or 5.")
// }

// Activity 6


let num4 = 123321;
let numString = num4.toString(); 
let reverseNumString = numString.split('').reverse().join('');

if (num4 == reverseNumString){
    console.log(`Yes ${num4} is a palindrome`)
} else {
    console.log(`No ${num4} is not a palindrome`)
}


// const num = 123321;
// const isPalindrome = (str) => {
//   const reversed = str.split('').reverse().join('')
//   return str === reversed;}
// if (isPalindrome(num.toString())) console.log(`Yes ${num} is a palindrome`)
// else console.log(`No ${num} is not a palindrome`)



// Activity 7

let time = 1400;
placeOfWork = "Manchester";
townOfHome = "Oldham";

if ((time < 800) && (time >= 1800)) {
  console.log (`It is ${time}am, I'm at home in ${townOfHome}`)
}
else if ((time >= 800) && (time < 900)) {
    console.log (`It is ${time}am, I'm on my way to work in ${placeOfWork} `)
}
else if ((time > 900) && (time < 1200)) {
  console.log (`It is ${time}am, I'm at work in ${placeOfWork}`)
}
else if ((time >= 1200 ) && (time < 1300)){
  console.log (`It is ${time}pm, I'm on my lunch`)
}
else if ((time >= 1300)){
  console.log (`It is ${time}pm, I'm at my place of work in ${placeOfWork}`)
}
else if (time >= 1700){
  console.log (`It is ${time}pm, I'm on my way to my home in ${townOfHome}`)
}

//Activity 8 





