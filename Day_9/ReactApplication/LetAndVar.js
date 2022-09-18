var str1 = "Nimesh";     //String
var str2 = 'N';          //Character

let str3 = "Nimesh";     //String
let str4 = 'N';          //Character

console.log(str1);  //Nimesh
console.log(str2);  //N
console.log(str3);  //Nimesh
console.log(str4);  //N


//What is the Difference Between var and let

//(1.)
console.log(str5);     //Cannot sccess 'str5' before initializing
let str5 = "Nimesh";

console.log(str6);   //Undefined
var str6 = "Nimesh";


//(2.)
var fname = "Nimesh";
var fname = "Mendis";
console.log(fname);     //Mendis
//Because of the Overiding and No Errors Showing

let fname = "Nimesh";
let fname = "Mendis";
console.log(fname);
//Simply Showing an Errors Showing Because We Assign Variables for Same Attribute


//(3.)
//let is a Block Scope
//var is a Function Scope

//let
function greet() {
    let a = "Hello";
    if (a == "Hello") {
        let b = "World";
        console.log(a + " " + b);     //Hello World
    }
    console.log(a + " " + b);     //b is not defined
}
greet();

//var
function greet() {
    var a = "Hello";
    if (a == "Hello") {
        var b = "World";
        console.log(a + " " + b);     //Hello World
    }
    console.log(a + " " + b);     //Hello World
}
greet();