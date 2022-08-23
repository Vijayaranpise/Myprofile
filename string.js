//two ways to create string
var firstNAme=new String("Mohit");//using new key word
var firstNAme="Mohit";//using string literal
var fName="Mohit";


var firstNAme="Mohit";
console.warn(firstNAme);
console.log(firstNAme.length);

var detail="CODEMIND is a training and product based company";
console.warn(detail);
console.log( "total length:",detail.length);//48 including the space
console.log("first letter:",detail.charAt(0));//start from 0 to onwards
console.log("second letter:",detail.charAt(1));
console.log("39th letter:",detail.charAt(39));
console.log("last letter:",detail.charAt(47));//last character
var length=48;
console.log("last letter:",detail.charAt(length-1));//last character 48-1

var comment="  You are doing good, Practice more now please to become good developer  ";
console.warn(comment);
console.log("length==>",comment.length);
var lastChar=comment.length-1;    

//change to lower and upper case---2 methods 1.toLocaleLowerCase 2.toLowerCase
var lowerCase=comment.toLocaleLowerCase();//1st method
console.log("to lowercase ==> ",lowerCase);

console.log("to uppercase ==>",comment.toUpperCase());//another method

//trim method
console.log("trim==>",comment.trim());
var trim=comment.trim();
console.log(trim,"length==>",trim.length);
//or
console.log(trim,"length==>",comment.trim().length);

//replace method
var replaceString=comment.replace("good","excellent");
console.log("replace good to excellent==>" ,replaceString);
//another method
console.log(comment.replace("good","excellent"));

//split
var splitString=trim.split(''); //letter split
console.log("split==>",splitString);
console.log("Total letter of the given string is:",splitString.length);

console.log("split==>",trim.split(' '));//word split
console.log("Total words in the given string is:",comment.trim().split(" ").length);

//search methods

//1.indexOf
var index=comment.indexOf("Practice") ;          
console.log("index of Practice==>",index);
//or
console.log("index of Practice==>",comment.indexOf('Practice'));     

//2.lastIndexOf==?
var lastIndex=comment.lastIndexOf("Practice") ; 
console.log("last index of practice==>",lastIndex);

//3.startsWith
var studentName="Vijaya Ranpise";
console.log("=============string==>",studentName,"============")
var startWithResult= studentName.startsWith('Vij');
console.log('startWith Vij==>',startWithResult);

var startWithResult= studentName.startsWith('Ra');
console.log('startWith Ra==>',startWithResult);

//4.endsWith
var endWithResult= studentName.endsWith('se')
console.log('endWith se==>',endWithResult);

var endWithResult= studentName.endsWith('r')
console.log('endWith r==>',endWithResult);

//to GET subString
console.log("=============to GET subString==============")
//1.slice(start,end)
var slice=comment.slice('21','35');
console.log(slice);
console.log("slice 30 to 45==>",comment.slice('30','45'));

//2.subString(start,end)
//3.subStr(start,end)

//type conversion
var applePrice="20";
var mangoPrice="10";

console.log("price of apple:",typeof applePrice);
console.log("price of mango:",typeof mangoPrice);

var applePriceInNumber=parseInt(applePrice);
var mangoPriceInNumber=parseInt(mangoPrice);

console.log("price of apple:",typeof applePriceInNumber);
console.log("price of mango:",typeof mangoPriceInNumber);
//OR
var applePriceInNumber=parseFloat(applePrice);
var mangoPriceInNumber=parseFloat(mangoPrice);

console.log("price of apple:",typeof applePriceInNumber);
console.log("price of mango:",typeof mangoPriceInNumber);

console.log("total price:",applePriceInNumber+mangoPriceInNumber);