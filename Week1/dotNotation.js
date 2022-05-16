console.log("Hello World");

console.log("Hello World".toUpperCase());

console.log(Math.random());

console.log(Math.random() *10 );

console.log(Math.floor(5.95));



console.log("       |       |       ");
console.log("       |       |       ");
console.log("       |       |       ");
console.log("-----------------------");
console.log("       |       |       ");
console.log("       |       |       ");
console.log("       |       |       ");
console.log("-----------------------");
console.log("       |       |       ");
console.log("       |       |       ");
console.log("       |       |       ");


var lines = ["       |       |       ",
"       |       |       ",
"       |       |       ",
"-----------------------",
"       |       |       ",
"       |       |       ",
"       |       |       ",
"-----------------------",
"       |       |       ",
"       |       |       ",
"       |       |       "]
lines.forEach(Element => console.log(Element))

//Using array

const lines = ["        |       |          ","---------------------"]
console.log( lines[0], "\n", lines[0], "\n", lines[0], "\n", lines[1], "\n",
lines[0], "\n", lines[0], "\n", lines[0], "\n", lines[1], "\n", lines[0], "\n", lines[0], "\n", lines[0]) ;

//Using loop

let lines = ["      |       |          ","---------------------"];
for (let i = 0; i < lines.length; i++)
    console.log(lines[0]); 
    console.log(lines[0]);
    console.log(lines[1]);
    console.log(lines[0]); 
    console.log(lines[0]);
    console.log(lines[0]);
    console.log(lines[1]);
    console.log(lines[0]);
    console.log(lines[0]); 
    console.log(lines[0]); 

const vertical = [

    " | | ",
    
    " | | " ,
    
    " | | " ,
    
    "--------------" ,
    
    " | | ",
    
    " | | " ,
    
    " | | " ,
    
    "--------------" ,
    
    " | | ",
    
    " | | " ,
    
    " | | "
    
    ]
    
    // This loop will LOOP through the array printing out each item
    
    for (let i = 0; i < vertical.length; i++){
    
    console.log(vertical[i])
    
    };
    
    // // #2 Using nested for loops
    
    // This will loop code between here and * 3 times
    
    for (let i = 0; i<3; i++){
    
    // This will loop code between here and ** 3 twice
    
    for(let j = 0; j<2; j++){
    
    // This will print out twice because of the loop ^
    
    console.log(" | | ")
    
    }
    
    // if i is NOT equal to 2 then print the below
    
    if (i !== 2){
    
    console.log("--------------")
    
    }
    
    }
    
    console.log(Math.floor(Math.random()*10));


 













