// Activity 1


let name = 'Eddie';
let age = 25;
let favColour  = 'Blue';

name = 'Mark';
age = 30;
favColour = 'Red';

console.log(`${name} is ${age} years old. ${name}'s favourite colour is ${favColour}`);


// Activity 2

let breakfast = 'Cereal';
let dinner = 'Sandwich';
let tea = 'Steak';

breakfast = 'Porridge';
dinner = 'Burger';
tea = 'Spaghetti';

console.log(`Today breakfast is ${breakfast}, Dinner is ${dinner}, and tea is ${tea}`);

// Activity 3


const todaysDate = new Date();
const birthDate = new Date('1986-08-06');
const days = 86400000;
console.log ((todaysDate-birthDate)/days);

// activity 4

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

let row = [
            `   |   |   \n ${space1} | ${space2} | ${space3}  \n   |   |   ,`
`   |   |   \n ${space4} | ${space5} | ${space6}  \n   |   |   ,`
`   |   |   \n ${space7} | ${space8} | ${space9}  \n   |   |   ,`
]

    for (let i = 0; i < row.length; i++){
        console.log(row[i]);
        if(i < row.length -1){
            console.log('-----------')
        }
    }


const Space1 = "x"
const Space2 = "o"
const Space3 = " "
const Space4 = "x"
const Space5 = "x"
const Space6 = " "
const Space7 = "o"
const Space8 = " "
const Space9 = " "

console.log("      |        |       ")
console.log(`    ${Space1} |   ${Space2}    |   ${Space3}  `)
console.log("      |        |       ")
console.log("----------------------")
console.log("      |        |       ")
console.log(`    ${Space4} |   ${Space5}    |   ${Space6}  `)
console.log("      |        |       ")
console.log("----------------------")
console.log("      |        |       ")
console.log(`    ${Space7} |   ${Space8}    |   ${Space9}  `)
console.log("      |        |       ")