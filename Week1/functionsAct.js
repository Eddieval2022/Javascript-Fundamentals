
//Activity 1

const factorial = (n) => {
    if ((n === 0) || (n===1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));

//Activity 2
let orderCount = 0;

const takeOrder = (topping) => {
    console.log (`Pizza with ${topping}`);
    orderCount++;
}
takeOrder("pineapple");


// Activity 3


const userPin = 1234;
let withAmount = 30;
let balance = 1000;

const cashWithdraw = (userPin, withAmount) => {

    if (userPin = true && withAmount < balance) {
        let newBalance = (balance-withAmount);
        console.log(`Withdrawing ${withAmount} from account. Your new balance is ${newBalance}`)
    }
    else if (withAmount > balance) {
        console.log("You have insufficient funds for this amount")
    }
    else {
        console.log("Your PIN Number is incorrect.")
    }
}
cashWithdraw(4444,"1100");
