function Person(adharNo, fullName, grade){
    this.adharNo = adharNo;
        this.fullName = fullName;
        this.grade = grade;
}
let virajPerson= new Person("12525753", "Viraj r " , "A")
console.log(`Details are : ${virajPerson.adharNo}  ${virajPerson.fullName}   ${virajPerson.grade}`)
let vijayaPerson= new Person("12525753", "Vijaya Ranpise " , "B")
console.log(`Details are : ${vijayaPerson.adharNo}  ${vijayaPerson.fullName}   ${vijayaPerson.grade}`)