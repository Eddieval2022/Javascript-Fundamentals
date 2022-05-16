// Activity 1

let favFilms = ["Roadhouse", "The Matrix", "Robocop", "Limitless", "Pulp Fiction" ];

favFilms.push( "The Butterfly Effect", "War Dogs" );

for (let i = 0; i<favFilms.length; i++){
    console.log(favFilms[i]);
}

// Activity 2


let randNum = [];
for(let i = 0; i < 6; i++){
console.log (Math.floor((Math.random()*50)+1)); (randNum);
}

// Activity 3

let num = [];

for(let i = 0; i < 10; i++){
    if (i % 1 == 0){
            num.push(i);
    }
}

console.log(num.reverse());

// Activity 4


let films = ["Roadhouse", "Ghostbusters", "The Matrix", "Robocop"];

for (let i = 0; i<films.length; i++){
    console.log(films[i])
}
if (films[2] == "Ghostbusters"){
    console.log("Yay it's Ghostbusters!");
}
else (console.log("Boo! we want Ghostbusters!"))


 //Activity 5



 for(let i = 0; i < 6; i++){
let Check = Math.floor((Math.random()*30)+1);
 

if (Check % 7 === 0){
    console.log(`The number ${Check} is Divisable by 7`)}

else 
    {console.log (`The number ${Check} is NOT Divisable by 7`)}
}

    // Activity 6

 let bobsFollowers = ["James","Mark","Steven","Shelly"]
 let hannahsFollowers = ["James","Carol", "Steven","Tracy" ]
for(let i=0;i<bobsFollowers.length;i++){
    for(let i1=0;i1<hannahsFollowers.length;i1++){
        if(bobsFollowers[i] == hannahsFollowers[i1]){
            console.log(`${bobsFollowers[i]} Follows both Hannah and Bob`);
            continue;
        }
    }
}
 // Activity 7



//  while — loops through a block of code as long as the condition specified evaluates to true.

//  do…while — loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true.

//  for — loops through a block of code until the counter reaches a specified number.

//  for…in — loops through the properties of an object.

//  for…of — loops over iterable objects such as arrays, strings, etc.






