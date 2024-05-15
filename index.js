/*var my_name = "Benni Plati";
function myName(){
    let my_name = "Lulamile Plati";
    return my_name;
}
console.log(myName());
console.log(my_name);
//console.log(my_name);*/

//objects
/*let person = {
    "name": "Denver Vlohovic",
    "Country": "Croatia",
    "Age": 31,
    "hobbies": ["football","Tennis","Golf"]
};
console.log(person)
console.log("Name: "+person.name);
console.log("Number Of Hobbies: "+person.hobbies.length)
person.hobbies.push("Video Games");
console.log("Number Of Hobbies: "+person.hobbies.length)
person.hobbies.pop();
console.log(person)
person.hobbies.shift();
person.Age=24; //Setting a property in objects
console.log(person)
delete person.Country //Deleting a property in objects
console.log(person)
person.Continent = "Europe"; //Adding a property in objects
console.log(person)*/

//Loops
let profile = [
    {
        "firstName": "vini",
        "surname": "jr",
        "number": "2858735235",
        "likes": ["Fifa","5 vs 1","football","Liverpool"]
    },
    {
        "firstName": "Arda",
        "surname": "Guller",
        "number": "4567346788",
        "likes": ["Fifa","braai","football"]
    },
    {
        "firstName": "Roydrigo",
        "surname": "Goes",
        "number": "98876845738",
        "likes": ["beach","LW","Man City"]
    },
    {
        "firstName": "Jude",
        "surname": "Bellingham",
        "number": "545735783564",
        "likes": ["training","10","Barcelona"]
    },
];

function lookUpProfile(name,prop){
    for(let i = 0; i<profile.length;i++ ){
        if(profile[i].firstName===name){
            if(profile[i].hasOwnProperty(prop)){
                return prop+": "+profile[i][prop];
            }
        }
    }
}
console.log(lookUpProfile("vini","likes"))