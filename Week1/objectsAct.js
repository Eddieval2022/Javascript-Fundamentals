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
    drinks: {
        coke: 1.10,
        orange: 1.50,
        tea: 1.50,
        coffee: 1.70,
        chocolate: 1.60,},
    food:   {
       Toast: 0.90,
       Sand: 2.00,
       Toastie: 2.50,
       soup: 3.00,}

       

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

// Objects: Activity 3-------------------------------------

//Declaring variables
const coffeeShop1 = {
    branch: "Manchester",
  
    drinks: {
      americano: 2,
      latte: 2.5,
      espresso: 1.5,
      capuccino: 3,
    },
  
    food: {
      cookie: 1.5,
      muffin: 2,
      sandwich: 3,
    },
  
    //Function which creates a new array, using the ... spread operator, and functionality to connect the drinks order and cost.
    drinksOrdered(...drinks) {
      let cost = 0;
      const drinksStr = drinks.join(" & ");
      drinks.forEach((drink) => (cost += this.drinks[drink]));
      cost = cost.toString().split(".");
      cost[1] = cost[1].padEnd(2, "0");
      cost = cost.join(".");
  
      return this.displayOrder(drinksStr, cost);
    },
   //function which again creates a new array and functionality to connect the order and cost.
    foodOrdered(...food) {
      let cost = 0;
      const foodStr = food.join(" & ");
  
      food.forEach((item) => (cost += this.food[item]));
  
      cost = cost.toString().split(".");
      cost[1] = cost[1].padEnd(2, "0");
      cost = cost.join(".");
  
      return this.displayOrder(foodStr, cost);
    },
  
    //function to create a string to inject the variables using template literals. 
    displayOrder(order, cost) {
      return console.log(
        `Your ${order} will be with you shortly, the total is £${cost}.`
      );
    },
  };
  
  coffeeShop.drinksOrdered("capuccino", "espresso");
  coffeeShop.foodOrdered("cookie", "muffin");