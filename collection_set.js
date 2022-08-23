const setOfNumber = new Set();
setOfNumber.add(30);
setOfNumber.add(40);
setOfNumber.add(50);
setOfNumber.add(10);
setOfNumber.add(50);
console.log(setOfNumber);

console.log("=========Size of set========");
console.log(setOfNumber.size);
// setOfNumber.clear();
// console.log(setOfNumber);

console.log("=========Delete Element========");
setOfNumber.delete(40);
console.log(setOfNumber);

console.log("=========Check element exist or Not========");
let isExist = setOfNumber.has(50);
console.log(isExist);
let isAvailable = setOfNumber.has(500)?"yes":"no"
console.log(`Is 500 Available in set?  ${isAvailable}`);

for(const element of setOfNumber){
    console.log(element)
}