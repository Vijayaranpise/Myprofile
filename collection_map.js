const mapOfPrices = new Map();
mapOfPrices.set("Mango",100);
mapOfPrices.set("Apple",200);
mapOfPrices.set("Papaya",40);
mapOfPrices.set("Water Melon",30);

console.log(mapOfPrices);
mapOfPrices.set("Apple",500);    //over lap values
console.log(mapOfPrices);
mapOfPrices.set("apple",100);//case sensitive
console.log(mapOfPrices);

console.log("======== Get value by key ========");
const applePrice =mapOfPrices.get("Apple");
console.log(applePrice);
console.log(mapOfPrices.get("Apple"))

console.log("======== Before getting the value just check it is exist or not ========");
const isPapayaAvailable =mapOfPrices.has("Papaya");
if(isPapayaAvailable){
    const papayaValue =mapOfPrices.get("Papaya");
    console.log(papayaValue);
}

console.log("======== Before Deleting the value just check it is exist or not ========");
const isAppleAvailable =mapOfPrices.has("Apple");
if(isAppleAvailable){
    const isDeleted = mapOfPrices.delete("Apple");
    console.log(`Key-Apple Deletion status:${isDeleted} `);
}

console.log("======== Size of map ========");
console.log(mapOfPrices.size);

console.log("======== Traverse map  ========");
const setOfKey =mapOfPrices.keys();  //Apple,Mango,.....
for (const key of setOfKey){
    console.log(`Map Entry ==> ${key} ${mapOfPrices.get(key)}`)
}