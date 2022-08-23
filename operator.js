var applePrice=100;
var mangoPrice=120;
console.log("======Arithmetic Operation========");
console.log("total price==>",applePrice+mangoPrice);
console.log("subtraction==>",applePrice-mangoPrice);
console.log("multiplication==>",applePrice*mangoPrice);
console.log("division==>",applePrice/mangoPrice);
console.log("price of 2Kg apple==>",applePrice*2);
console.log("price of half kg apple==>",applePrice/2);
console.log("modules operator==> %",applePrice%mangoPrice);
console.log("modules operator==> %",16%3);

var applePriceAfterIncrement=++applePrice;  //applePrice=applePrice+1
console.log(" Apple price after increment: " ,applePriceAfterIncrement);
var applePriceAfterDecrement=--applePrice; //applePrice=applePrice-1
console.log(" Apple price after decrement: " ,applePriceAfterDecrement);
var mangoPriceAfterDecrement=--mangoPrice;
console.log(" mango price after decrement: " ,mangoPriceAfterDecrement);

console.log("=======Assignment Operator=======");
var temp=100;
console.log("compound Addition: ",temp=+5); //temp=temp+5

console.log("=======Comparison Operator=======");
var num1=10,num2=12;        //we can use this operation for string, boolean also
console.log("1.operator == equal to==>",num1==num2);                  //is equal
console.log("2.operator != not equal==>",num1!=num2);                //not equal
console.log("3.operator > Greater==>",num1>num2);                    //10 > 12
console.log("4.operator >= Greater than equal==>",num1>=num2);       //10 >= 12
console.log("5.operator < Less than ",num1<num2);                   //10 < 12
console.log("6.operator <= Less than equal",num1<=num2);            //10<=12
console.log("")
console.log("=======Difference between == and === operator======= ")
var bananaPrice="20";
var grapePrice=20;

console.log("7.== operator",bananaPrice==grapePrice);     //compare only value 
console.log("8.=== operator",bananaPrice===grapePrice);  //comparing value + data type

console.log("========Logical Operators========");
console.log("AND");
console.log("OR");
console.log("NOT")

console.log("========Ternary Operators ? : ========");
var isMangoAvailable= false;
var isAppleAvailable= true;
var result1=isAppleAvailable ? "Please  buy Apple" : "Please don't   not buy";
console.log("9.Result:",result1);

var result2=isMangoAvailable ? "Please buy Apple" : "Please don not buy";
console.log("10.Result:",result2);

var isMangoAvailable= false;
var isAppleAvailable= true;
var Result3=isAppleAvailable && isMangoAvailable ? "Please buy both fruit" : "Please don not buy";  //in AND 1 only for both value 1  
console.log("11.Result:",Result3);

var Result4=isAppleAvailable || isMangoAvailable ? "Please buy  fruit" : "Please don not buy"; //in OR 0 only when both value  0 
console.log("12.Result:",Result4);

console.log("************condition in condition***************")
//First number is greater than zero
  //positive
      //is even 
      //is odd
 //negative
 console.log("Ternary operator Nesting Example");
var numberToCheck = 20;
var resultChecked = (numberToCheck > 0) ? ((numberToCheck%2==0) ?  "Number is even" : "Number is Odd") : " Number is Negative";
console.log("Final Result", resultChecked);


