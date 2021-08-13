const person = {
    fname: " manvi",
    lname: " mahi",
    age: 20
};

for (let x in person) {
    var txt = 0
    txt += person[x];
    console.log(txt);
}
person.nationality = "English";
console.log(person)
