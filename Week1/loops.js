// let favouriteDrinks = ["Coke","Fanta","Tonic"];

// console.log(favouriteDrinks[0]);
// console.log(favouriteDrinks[1]);
// console.log(favouriteDrinks[2]);

// FOR LOOP

let favDrinks = ["Coke","Fanta","Tonic","Red Bull"];

for(let i = 0; i<favDrinks.length; i++){  //(let i = 0 is initial expression) (i<favDrinks.length is the condition)(i++  is an increment expression)
    console.log(favDrinks[i]);
}


let multiplesTwo = [];

for(let i = 0; i<=20; i++){
    if(i % 2 == 0){
        multiplesTwo.push(i);
    }
}
console.log(`Numbers divisable bt 2 between 0 and 20 are: ${multiplesTwo}.`);

// WHILE LOOPS

let age = 15;
 while (age < 18){
     console.log("you're a child!");
     age++;
 }
 console.log("You're an adult now!")

 let cards = ["Diamond","Spade","Heart","Club"];
 let currentCard = "Club";
 while(currentCard != "Spade"){
     console.log(currentCard);
     currentCard = cards[Math.floor(Math.random()*4)];

 }
 console.log(currentCard);
