interface Person{
    name: string;
    age: number;
}

const people: Person[] = [
    {name: "John Lee", age: 30},
    {name: "Marry Burner", age: 25},
    {name: "Marry Kill", age: 35}
];
//Function to filler people who are at least 30 year old
function fillerAdult(persons:Person[]):Person[]{
    return persons.filter(person=>person.age>=30);
}
//using Function and logging the result
const adult = fillerAdult(people);
console.log(adult);