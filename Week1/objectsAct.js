//Activity 1
const person = {
    name: "Eddie",
    age: "35",
    favouriteSongs: [
        "mobb deep - Shook ones",
        "coops - laws of nature",
        "jaykae - toothache",
    ],
 sayHi(){
     return`Hello my name is ${this.name}`
 }

}

console.log(person.sayHi())

//Activity 2

const pet = {
    name: "Alfie",
    typeOfPet: "Cat",
    age: 11,
    colour: "black",
eat(){
    return `${this.name} is eating.`
},
drink(){
    return `${this.name} is drinking`
},
};
console.log(pet.eat())
console.log(pet.drink())

//Activity 3

// drink = "coffee";
// foodchoice = "sandwich";


const coffeeShop = {
    branch: "Oldham",
    drinks: ["Coke","Orange","Tea" ,"Coffee","Chocolate"],
        cokePrice: 1.10,
        orangePrice: 1.50,
        teaprice: 1.50,
        cofPrice: 1.70,
        chocPrice: 1.60,
    food: ["Toast" = 0.90,"Sandwich" = 2.00,"Toastie" = 2.50,"Soup" = 3.00,],
       ToastPrice: 0.90,
       SandPrice: 2.00,
       ToastiePrice: 2.50,
       soupPrice: 3.00,


}//  

///Gwyls Version
// let order = [];
// const coffeeShop = {
//     branch:"manchester",
//     drinksWithPrices:{"tea":1.00,"americano":2.00,"mocha":3.00,"latte":3.00,water:0},
//     foodWithPrices:{"salad":2.00,"sandwich":3.00,"tunaJacket":4.50,"grape":15.00},
//     drinksOrdered(drink1,drink2){
//         let drinks = Object.keys(this.drinksWithPrices); 
//         let drinkValues = Object.values(this.drinksWithPrices); 
//         order.push(drinkValues[drinks.indexOf(drink1)]);
//         order.push(drinkValues[drinks.indexOf(drink2)]);
//         return `For drinks you've ordered ${drink1} and ${drink2}`;},
//     foodOrdered(food1,food2){
//         let foods = Object.keys(this.foodWithPrices); 
//         let foodValues = Object.values(this.foodWithPrices); 
//         order.push(foodValues[foods.indexOf(food1)]);
//         order.push(foodValues[foods.indexOf(food2)]);
//         return `For food you've ordered ${food1} and ${food2}`;
//     }
// }
// console.log(coffeeShop.drinksOrdered("tea","mocha"));
// console.log(coffeeShop.foodOrdered("salad","grape"));
// let total = 0;
// for(i=0;i<order.length;i++){
//     total+=order[i];
// }

// console.log(`Your total comes to £${total}.`);