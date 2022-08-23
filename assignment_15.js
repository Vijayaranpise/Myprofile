const container = ["Banana","Orange","Apple","Mango","Water Melon"]; 
console.log(container );
console.log("1. First Element:",container[0]);
console.log("1.2 Last Element:",container[container.length-1]);

container.unshift("Papaya");
console.log(`2.After adding "papaya" before Banana: ${container}`)

container.splice(4,1);
console.log(`3.Removing Mango from array:${container}`);

container.push("Pineapple");
console.log(`4.Adding Pineapple at last position:${container}`);

container.splice(container.length-1,0,"Dragon Fruit");
console.log(`5.After adding "Dragon Fruit" before Water Melon: ${container}`)

container.splice(2,1,"Kiwi");
console.log(`6.Replacing "Orange" with "Kiwi": ${container}`);

console.log(`7.Total elements in array: ${container.length}`);

var slice1to4=container.slice(1 , 4);
console.log(`8.Element from index 1 to 4: ${slice1to4}`);

var lastThreeElement=container.slice(container.length-3);
console.log(`9.Last three element of array: ${lastThreeElement}`);

console.log("10.All the elements of array");
for (let index = 0; index < container.length; index++) {
    const element = container[index];
    console.log(` ${element}`)

}