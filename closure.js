
var globalVariable = 100;

function outerFunction() {
    var innerVariable = 200;
    var fun = function () {
        var inner = 300;
        console.log("I am inside function expression");
        console.log(inner);
        console.log(innerVariable);
        console.log(globalVariable);
    }
    return fun;
}

let innerFunction = outerFunction();
innerFunction();