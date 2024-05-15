/*var my_name = "Benni Plati";
function myName(){
    let my_name = "Lulamile Plati";
    return my_name;
}
console.log(myName());
console.log(my_name);
//console.log(my_name);*/

//objects
let person = {
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
console.log(person)
