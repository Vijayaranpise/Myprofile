
function greet(){
    console.log("Good Morning");
}

function callFriend(callbacks) {
    console.log("Hey my Friend...");
    callbacks();
}
callFriend(greet);