var fruitContainer ='Apple';
fruitContainer="clustered Apple"; //in var we can change the value multiple times but const has fix value 

console.log(fruitContainer);

var firstNAme;//variable declaration
firstNAme ="Mohit";//variable initialization
var lastNAme; //variable declaration
 
var fullName="Mohit sharma";  //variable declaration and  initialization
console.log(firstNAme);
console.log(fullName);

var city= 'pune';
console.log(city);

//Create three variables to store information like Gender, age, fullName

var Gender ="  male ";
var age ="  25" ;
var fullName ="   viraj vikas ranpise" ;
console.info(Gender, age, fullName) 

//another method- Declaring multiple values in same variable 
var Gender =" female",age ="26", fullName ="Vijaya vikas ranpise"
console.warn(Gender, age, fullName) 

//change the value
var country="India";
console.log(country);
var country="Japan";
console.log(country);

//swap
console.warn("Swapping two variables using third variable");
var glassContainer = " strawberry";
var woodenContainer = " apple ";
console.log(glassContainer, woodenContainer )
var plasticContainer;
plasticContainer=woodenContainer;
woodenContainer=glassContainer;
glassContainer=plasticContainer;

console.log(glassContainer, woodenContainer)

var myContainer='Apple';//declaration or define
var myOtherContainer;//camel case my_container
myContainer='Mango';

var number1=100;
var number2=200;
console.log(number1,number2);//100 200

var number3;
number3=number1;
number1=number2;
number2=number3;

console.log(number1,number2);//200 100

console.warn("Swapping two variables without using third variable");
var priceApple = 100; 
var priceMango = 200; 
console.log("Before Swapping ", priceApple, priceMango);
priceApple = priceApple + priceMango; // priceApple = 300, priceMango = 200
priceMango = priceApple - priceMango; // 300 - 200 =  100  priceMango=100  priceApple=300
priceApple = priceApple - priceMango; // 300 - 100 = 200
console.log("After Swapping ", priceApple, priceMango);

