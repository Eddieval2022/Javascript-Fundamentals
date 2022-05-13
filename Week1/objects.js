let offer = "none";
let time = 1200;
const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuchino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with suprisingly priced sandwich",
    noOffer: "Sorry no offer",
     openCafe:()=>{
     return"come on in";
 },
 closeCafe:()=>{
     return "we are closed, come back tomorrow!"
 }

};
if (time<1100){
    offer = cafe.breakfastOffer;
    }
    else if (time < 1500){
        offer = cafe.lunchOffer;
        console.log(cafe.lunchOffer);
    };
openCafe(){
    if (this.hasSpecialOffers){
        return "Time for a special offer!";
    }
}
console.log(cafe.openCafe())

console.log(person.favouriteSongs)
console.log(person.age);
console.log(person.name);

const person = {
    name: "Eddie",
    age: "35",
    favouriteSongs: [
        "mobb deep - Shook ones",
        "coops - laws of nature",
        "jaykae - toothache",
    ],
}
// let day = "monday"
// const alarm = {
//     weekendAlarm = "no alarm needed",
//     weekdayAlarm = "get up at 7am",
// }
// if (day == "Saturday" || day == "Sunday") {
//     consol
// }
// const alarms = {
//     weekendAlarm:"no alarm needed",
//     weekdayAlarm:"get up at 7AM"
// }
// let day = "thursday";
// let alarm = "";
// if(day == "saturday"||day == "sunday"){
//     alarm = alarms.weekendAlarm;
// }
// else{
//     alarm = alarms.weekdayAlarm;
// }


