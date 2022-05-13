let weather = "sunny";
 if (weather == "sunny") {
     console.log("Well I better wear some suncream!")
 }
 else if (weather == "rainy") {
     console.log("Better take an umbrella")
 }
 else {console.log ("Hmmm it could go either way")}


 
 
 
 if(1 === "1") {
     console.log(true);
 }
 else{
     console.log(false);
 }




 if(1 != "1") {
    console.log(true);
}
else{
    console.log(false);
}






let place = "Manc";
let weather1 = "Cloudy";

if(place == "Manc" && weather == "Sunny") {
    console.log("Check again");
}

else if (place == "Manc" && weather1 == "Rain") {
    console.log("obvs");
}

else {console.log ("What it isnt raining?")};



let car = "Suzuki";

switch(car){
    case "Ford":
        case "GM":
            console.log("You've got an American car!");
            break;
            case "peugeot":
            case "Citroen":
                console.log("You've got a french boy!");
                break;
                case "Honda":
                    case "Toyota":
                        case "Suzuki":
                            console.log("Japanese cars are dead quiet!");
                            break;
                            case "mercedes":
                                console.log("German aren't that bad at all!");
                                break;
                                case "hyundai":
                                    case "kia":
                                        console.log("South korean cars are getting popular");
                                        break;
                                        default:
                                            console.log("your car is not in the top ten companies in the world!!")
}







