var myDetails={
    "first name":"kumar",
    "last name": "vadthya",
    "middle name":"nayak"
 }

 console.log(myDetails["first name"])
 console.log(myDetails["last name"])
 console.log(myDetails["middle name"])

//  delete myDetails["first name"]
//  console.log(myDetails)


// var person={"name":"gouri","surname":"maity","age":37}

// for (person_details in person){
// console.log(person_details+ "= "+person[person_details]);
// }



function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);
console.log(typeof car1)

