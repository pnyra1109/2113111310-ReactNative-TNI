var people = [
    { name: "John Lee", age: 30 },
    { name: "Marry Burner", age: 25 },
    { name: "Marry Kill", age: 35 }
];
//Function to filler people who are at least 30 year old
function fillerAdult(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
//using Function and logging the result
var adult = fillerAdult(people);
console.log(adult);
