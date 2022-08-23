console.log("=======for loop===========")
console.warn("print 0 to 5")
for(let index =0; index<=5;index++){
    console.log(index);
}
console.warn("print alternative")
for(let index =0; index<10;index=index+2){
    console.log(index);
}
//print 5 to 10
console.warn("print 5 to 10")
for(let index =5; index<11;index++){
    console.log(index);
}
//print 10 to 1
console.warn("print 10 to 1")
for(let index =10; index>=1;index--){
    console.log(index);
}

//print 7 5 3 1
console.warn("7 5 3 1")
for(let index =7; index>=1;index=index-2){
    console.log(index);
}
//print 15 to 30 like 15 18 21
console.warn("15 18....30")
for(let index =15; index<=30;index=index+3){
    console.log(index);
}
//print table of 5
console.warn("5 10....50")
for(let index =5; index<=50;index=index+5){
    console.log(index);
}

//break the loop
console.warn("break loop at 10")
for(let index =0; index<50;index++){
    if(index==10){
        break;
    }
    console.log(index);
}
console.log("=======while loop===========")
let counter=1;
while(counter<=5){
    console.log(counter);
    counter=counter+1
}

//to get tha table of 10
let counterr=10;
while(counterr<=100){
    console.log(counterr);
    counterr=counterr+10;
}



console.log("======= Do while loop===========")
let index=0
do{
    console.log(index)
    index++;
}while(index<=5)

console.log(" ===========  Write a function to find vowels from the given string. Ex → ‘I love JavaScript’ ============= ");
let givenString = "I Love JavaScript";
let temp = ""; // "Ioeaai"
let numberOfVowels = 1;
for (let index = 0; index < givenString.length; index++) {
  let char = givenString.charAt(index); 
  if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U" || 
     char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ) {
         console.log(char);
         numberOfVowels = numberOfVowels + 1;
         temp = temp + char;

     }
}

console.log("Total number of Vowel in given string is : ", numberOfVowels);
console.log(`Vowels found is : ${temp} ${temp.length}`);


//break the loop
console.warn("break loop at 10")
for(let index =100; index>=10;index=index-10){
    if(index==60){
        break;
    }
    console.log(index);
}

console.warn("hello how are you")
for (let index = 1; index <= 15; index=index+2) {
  if  (index==11){
    break;
  }console.log(index)
    
} /*(let indexx=1; indexx<=15 ; indexx = indexx+2) {
    if(indexx==11){
        break;
    }
    
}
console.log(indexx);*/
