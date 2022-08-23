//var , let , const
console.log("=========Program Start=========");

function say(message){
    
    if(message=="Hi") {
        var greetings = "Good Morning";
        let buyMessage = "See you tomorrow";
        const PI=3.145;
        console.warn("Hey. How are you ? ");
        console.log(message);
        console.log(greetings);
        console.log(buyMessage);
    }
    console.log(greetings);
    // console.log(buyMessage);
    // console.log(PI);
}
say("Hi");

// console.log(greetings);

console.log("=========Program END=========");

console.log("=========================if statement====================================")
var numberToCheck = 21;
console.log(`Number to check is: ${numberToCheck}`);
if (numberToCheck > 0) {
    console.log(`number is positive: ${numberToCheck}`);
    if (numberToCheck % 2 == 0) {
        console.log(`hey this number is EVEN: ${numberToCheck}`);
    }
    if (numberToCheck % 2 != 0) {
        console.log(`hey this number is ODD: ${numberToCheck}`);
    }
}
if (numberToCheck < 0) {
    console.log(`number is negative: ${numberToCheck}`);
}




console.log("=========================if else====================================")
// if else statement
console.log(`Using if else statement --> Number to check is: ${number}`);
var number=22
if(number>0){
    console.log(`Number is Positive: ${number}`);
    if (number % 2 == 0) {
        console.log(`Hey this Number is EVEN: ${number}`);
    } 
} else {
    console.log("Number is negative man...");
}

console.log("ex.2     voting eligibility")
var age = 18
if (age >= 18) {
    console.log("YOU are eligible for vote")
} else {
    console.log("YOU are not eligible for vote")
}

console.log("=================if else if else====================")

var numberToCheck = 30;
console.log(`Number to check is: ${numberToCheck}`); 
if (numberToCheck < 0) {
    console.log(`Number is Negative: ${numberToCheck}`); // 2
} else if (numberToCheck % 2 == 0) {
    console.log(`Number is EVEN: ${numberToCheck}`); // 3
} else {
    console.log(`Number is ODD: ${numberToCheck}`); // 4
}

console.log('==========Switch case statement===============================')
var weekDayNumber = 3
switch (weekDayNumber) {
    case 1:
        console.log("Sunday")
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.warn("invalid input")
}
