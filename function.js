//function without argument  and return
function sayHello(){
    console.log("Hello,Good Morning");
    console.log("I am fine");
    console.log('I have my js session from 7 to 8.30 in the morning ');
}
sayHello();


//function with argument
//display()
function display(firstName,lastName){
    console.log("My name is-" ,firstName,lastName);
}
display("viraj","Ranpise");
  
//function with argument
function showAddress(state ,city, District){
    console.log("address-",state,city,District);
}
showAddress("Maharastra","Solapur","solapur");

//function with argument and return value
function prepareOrder(dishName){
    //prepare dish as a order
    //once dish is ready
    console.log("please wait");
    return "here is your dish:"+dishName;
}
var prepareOrder = prepareOrder("PBM");
console.log(prepareOrder);


//concatenation of two function
function ConcatArgument(fName,lName){ 
    
    console.log(`first name: ${fName} ,last name: ${lName}`);
    var resultOfConcatenation= fName +  lName;
    console.log(`concatination of two argument is: ${resultOfConcatenation}`);
}
ConcatArgument("Vijaya","Ranpise");
  

// //function Expression ---concatenation 
//function as property      
var myConcatFunction=function(first_Name,last_Name){                             //function as value
    console.log(`concatanation of two Argument is: ${first_Name+last_Name}`);
}
myConcatFunction("Vijaya", "Ranpise")



//showTrainingName == Angular ==>using function expression
var showTrainingName=function(trainingName){
    console.log(`I am currently in training: ${trainingName}`)
} 
showTrainingName("Angular")

// Function as a value --> Function expression
// Write a function expression with name sumTwoNumber and this should have two args. 
// This F.E should sum two argument and then return the result to log on console
var sumTwoNumber  = function(number_1, number_2) {
    var result = number_1 + number_2;
    return result;
}
var sumResult = sumTwoNumber(10, 20);
console.log(`Sum Result is ${sumResult}`)

console.log( " ===========  Recursion Function ======= " );
// Ex. 5 --> 5 + 4 + 3 + 2 + 1
function sumNumber(count){
    // count = 5
    if(count==0) 
        return 0;
    var addResult = count +  sumNumber(count = count-1); // 5 + 4 + 3 + 2 + 1 + 0
    return addResult;
}
var sumResult = sumNumber(5);
console.log("sumResult ==> ", sumResult);


  
