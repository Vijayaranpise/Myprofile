const arrayOfNumber = [5, 6, 7, 8, 6, 12, 5, 20];
console.log(arrayOfNumber)
console.log(`Length of array : ${arrayOfNumber.length}`)

console.log("==============Accessing array element============= ")
let firstElement = arrayOfNumber[0]
console.log(`zero index element: ${firstElement}`)
let lastElement = arrayOfNumber[arrayOfNumber.length - 1]
console.log(`last index element: ${lastElement}`)

console.log("==========Updating on element===========")
arrayOfNumber[4] = 10;
console.log(arrayOfNumber[4])

console.log("==========Log All Element===========") //using for loop
for (let index = 0; index < arrayOfNumber.length; index++) {
    const element = arrayOfNumber[index];
    console.log(element)

}

console.log("=========indexof()========")
let indexof = arrayOfNumber.indexOf(12)
console.log(`index:${indexof}`)

console.log("=========Add element at last position========")
arrayOfNumber.push(50)
arrayOfNumber.push(60)
console.log(arrayOfNumber)

console.log("=========Remove  element at last position========")
arrayOfNumber.pop()
console.log(arrayOfNumber)

console.log("=========Remove  element from first position========")
arrayOfNumber.shift()
console.log(arrayOfNumber)

console.log("=========Add  element to the first position=========")
arrayOfNumber.unshift(100)
console.log(arrayOfNumber)

console.log("**********original array**************")
console.log(arrayOfNumber);

console.log("========select all the element from 4th index to last index=========")
const slicedElement = arrayOfNumber.slice(4);
console.log(slicedElement)

console.log("=========select only last 3 elements of array ========")
const lastThreeElement = arrayOfNumber.slice(arrayOfNumber.length-3);
console.log(lastThreeElement)

console.log("========select  the element from position 3rd to 6th index of array=========")
const elementFrom3to6= arrayOfNumber.slice(3,6);
console.log(elementFrom3to6)

console.log("=========remove multiple element from array ========")
const splicedElement = arrayOfNumber.splice(7);
console.log(splicedElement);
console.log(arrayOfNumber);
arrayOfNumber.push(40)
arrayOfNumber.push(60)
arrayOfNumber.push(70)

console.log("**********original array**************")
console.log(arrayOfNumber);
// const removedElement=arrayOfNumber.splice(2,4);  //remove 4 elements from index 2 to 4
// console.log(removedElement);

console.log("=========Inserting  element at particular position of array ========")
arrayOfNumber.splice(2,0,700)
console.log(arrayOfNumber);

console.log("=========Replacing  element at particular position of array ========")
arrayOfNumber.splice(4,1,900)
console.log(arrayOfNumber);

console.log("=========Merge array using concat()=========");
const array1= [1, 2, 3, 4];
const array2= [5, 2, 8, 9];
const array3=array1.concat(array2)
console.log(array3);

console.log("=========Concat string  using concat() method + operator=========");
const firstName="Mohit";
const lastName="Sharma";
const fullName=firstName.concat( lastName);
console.log(fullName);

const fullName2=firstName + lastName;
console.log(fullName2);
