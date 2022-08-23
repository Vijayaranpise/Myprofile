let student={
    firstName: "Viraj",
    lastName: "Ranpise",
    email: "virajran25@gmail.com",
    password: "1234",
    address: {
        street: 'Manegaon',
        district: ' Solapur',
        state: "mh",

    },
    fullName: function () {
        return this.firstName + this.lastName
    }
};

console.log(student);       //access to the object
console.log(typeof student);

console.log("===============Access object properties 2 methods==============")
console.log(student.firstName);  //access only one property of object
console.log(`student full name : ${student.firstName} ${student.lastName}`); //access multiple property of object

console.log("===============Add property to object==============")
student.marks= "dtfyhjgjh" ;
console.log(student); 
console.log(student.marks);
student["age"]=" 24";
console.log(`student age is:${student.age}`);
console.log(student);

console.log("===============Create empty object==============")
let person={};
console.log(person)
person.name="Vijaya";
person["age"]=26;
console.log(person)

console.log("===============Delete an property from an object==============")
delete student.password
console.log(student.password)

console.log("===============check existing property==============")
let emailAvailable = "email" in student
console.log(`is email availabele: ${emailAvailable}`)
console.log(student.address)
console.log(student.address.street)

console.log("===============function as value  to the object property ==============")
let completename = student.fullName()
console.log(`fullname is :,${completename}`)

console.log("===============Get all the keys from an object ==============")
let studentkeys = Object.keys(student)
console.log(studentkeys);

console.log("===============Get all values from an object ==============")
let studentvalue = Object.values(student)
console.log(studentvalue);

console.log("===============Get all data using from in loop ==============")
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}