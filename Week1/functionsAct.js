const factorial = (n) => {
    if ((n === 0) || (n===1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));


let orderCount = 0;

const takeOrder = (topping) => {
    console.log (`Pizza with ${topping}`);
    orderCount++;
}
takeOrder("pineapple");





// const userPin = 1234;
// let withAmount = 30;
// let balance = 1000;

// const cashWithdraw = (Userpin, withAmount) => {

//     if (userPin = true) {
//         let newBalance = (balance-amount);
//         console.log(`Withdrawing ${withAmount} from account. Your new balance is ${new}`)
//     }
// }

//Nick/Olly version
let pinNum = 4454;
let amount = 30;
// let balance = 100;

const cashWithdrawal = (amount, pinNum) => {

    if (pinNum = true) {
        let newBalance = balance - amount;
        console.log ("Withdrawing £ ${amount}, your remaining balance is £ ${newBalance}.");
    }
    else {
        console.log("incorrect pin, no withdrawal available");
    }
}

cashWithdrawal("30",4444);