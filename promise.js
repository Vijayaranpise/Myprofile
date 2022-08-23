let promise = new Promise(
    function (resolve, reject) {
        let isAngularCompleted = true;
        let isTrainerAvailable = false;
        if (isAngularCompleted && isTrainerAvailable) {
            resolve("Ohh great.. Let us start now few adv stuff of JS");
        } else {
            reject("Sorry Guys. I am not available!");
        }
    }
);
promise.then(function (onSuccess) {
    console.log(`Promise full filled ===>  ${onSuccess}`);
}).catch(function (onFailure) {
    console.log(`Promise not full filled ===>  ${onFailure}`);
}).finally(function () {
    console.log("Good luck every one for your Job");
});