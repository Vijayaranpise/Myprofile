var applePrice="200RS";
var applePriceResult=new Number(applePrice);    //NaN -- Not a Number
console.warn("Result after type conversion :",applePriceResult);

console.log("arithmetic operation on NaN ==>",applePriceResult +10);

console.log("String with arithmetic operation ==>" ,"string" - 200);

console.log("Number divided by zero ==>", 23/0);

console.log("Type of NaN is ==>",typeof NaN);