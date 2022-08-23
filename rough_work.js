console.log("log");
console.info("info");
console.warn("warn");
console.error("error");
console.log("log");
console.trace("assignment");

console.table("table");
console.time("time");
console.timeEnd("timeend");
console.timeLog("timelog");
console.assert("assert");
console.count("count");
console.count("count");

console.count("log");
console.clear("clear");
var male=21;
var rMale= male<= 21 ? ' Boys are eligible for marriage' : ` Male are not eligible for marriage`

console.log("5.  Age of Male eligible for Marriage is 21  ==>", rMale)



let vijaya={
    age:"26",
    height:"173",
}
console.log(vijaya)

vijaya.mark=40;
console.log(vijaya)

console.log(" ======example========")
let index=0;
for(index;index<3;index++){
    console.log(index);
}
console.log("after adding semicolon");
for(index;index<3;index++);{
    console.log(index);
}

console.log(" ======example========")
var foo=1;
function myFun(){
    console.log(foo);
    var foo=2;
}
myFun()