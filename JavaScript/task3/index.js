var age = 22;
if (age >=18)
    console.log("you are an adult");
else{
    console.log("you're still a kid");
}

var score = 55;
if (score >= 50)
    console.log("You passed the test");
 else 
    console.log("you faield the test");

function isJohn(str){
    if (str.toLowerCase() == "john")
        console.log("Hello, John");
    else
    console.log("Amogus !");
}

function isWeekDay(str){
    if (str.toLowerCase() == "saturday" || str.toLowerCase() == "sunday")
        console.log("It's a weekday");
    else
    console.log("It's not a weekday");
}

function isEven(num){
    if (num % 2 == 0)
        console.log("number is even");
    else
    console.log("number is not even");
}

function isChar(str){
    // if the input is more than one char we'll say that it's not a char but rater a string
    //since js doesn't have a char data type we'll make sure to return "it's a char " only if the length of the string is 1
    // for the sake of simplicity i'm expecting the function to deal only with strings
    if (typeof str == "string" && str.length == 1)
        console.log(str + " is a char");
    else
    console.log(str + " is not a char");
}

isChar("a");
isChar("aaa");

var arr = [1,2,3];
var arr2 = {a:1, b:2, c:3}
function isArray(arr){ // used a ready mehtod to solve, gonna have to come back to this and do it manually
    return Array.isArray(arr);
    
}

console.log(isArray(arr));
console.log(isArray(arr2));

// sub-task 8 and 9
function isPositiveOrNegative(x){
    if (x > 0)
        console.log(x + " is a positive number");
    else if (x < 0)
        console.log(x + " is a negative number");
    else  // condition for the number 0
    console.log(x + " is neither positive or negative");
}

isPositiveOrNegative(0);


function isMultOf3(x){
    if (x % 3 == 0)
        console.log("z is multiple of 3");
}

function gpa(x){
    if (x >= 3.0)
        console.log("Congratulations, you have a good GPA!");
    else
    console.log("Your gpa is not that good");
}

function isGoodPassword(pass){
    if (pass.length > 7)
        console.log("Your password is strong");
    else
    console.log("your password is weak");
}

function ofWorkingAge(age){
    if (age >= 18 && age <= 65)
        console.log("you are of working age");
    else if (age < 18)
        console.log("you are too young to work");
    else 
    console.log("you have exceeded the allowed age ");
}
ofWorkingAge(17);
ofWorkingAge(66);
ofWorkingAge(18);
ofWorkingAge(65);

function primaryColor(color){
    if (color == "red" || color == "green" || color =="blue")
        console.log(color + " is a primary color");
    else
    console.log(color + " is not a primary color");
}

function isValidNumber(num){
    if(isNaN(num))
        console.log(num + " is not a valid number");
    else 
    console.log(num + " is a valid number");
}

isValidNumber(11) //"11 is a valid number"
isValidNumber("19") //"19 is a valid number"
isValidNumber("xyz") //"xyz is not a number"
isValidNumber("17.5") //"17.5 is a valid number"
isValidNumber("21F") //"21F is not a number

