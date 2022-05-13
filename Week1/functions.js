// // // const pressGrindBeans = () => {
// // //     console.log("Grinding for 20 seconds");
// // // }
// // // pressGrindBeans();

// // let coffeeIsGrinding = false;

// // const pressGrindBeans = () => {
// //     if (coffeeIsGrinding) {
// //         console.log("Stoping the grind");
// //     coffeeIsGrinding = false;
// //     } else {
// //         console.log("Grinding is about to begin");
// //         coffeeIsGrinding = true;
// //     }

// // }
// // pressGrindBeans();







// // let accNumber =5044921
// // const cashWithdrawal = (amount, accnum) => {
// //     console.log (`Withdrawing ${amount} from account ${accnum}` );

// // }
// // cashWithdrawal (300, accNumber);
// // cashWithdrawal (30, 50449921);
// // cashWithdrawal(200, 50447921)


// const addUp = (num1, num2) => {

//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));



const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log("The temperature is " + getFahrenheit(15) + "°F");

//Declaration function

function square(number) {
    return number * number;
};
square(5);

//expression function

const square = function(number) {
    return number * number;
};
square(5);










