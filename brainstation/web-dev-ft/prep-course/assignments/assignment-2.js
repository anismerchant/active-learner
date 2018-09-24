/*
Instructions:
Create a JavaScript file and name it assignment-2.js. Inside this file, write JavaScript code solving the two challenges below. Also include an explanation of what your code is doing in your own words. You can write plain English in JavaScript files using multi-line comments.

Challenge 1: write a loop that logs the following triangle to the console
#
##
###
####
#####
######
#######
*/

function triangle(y) {
    string = y;
    oneMore = '';
    for (x=0; x < 7; x++) {
        console.log(oneMore += string);
    }
}

triangle('#'); // put in any string as an argument

/*
Challenge 2: Write a function that takes in an integer (number) as a parameter. The function must log `"the number is even"` if the given parameter is an even number, and log `"the number is odd"` if it is odd.

Diving Deeper: What happens if the given parameter is not a number at all?
*/

function isEven(number) {
    if (number % 2 == 0 || number === false) {
        return console.log('the number is even');
    } else if (number % 2 == 1 || number === true){
        return console.log('the number is odd');
    } else {
        return console.log("sorry, please enter a numerical digit");
    }
}

isEven(2); // even number
isEven(1); // odd number
isEven("one"); // string
isEven(true); // boolean value
isEven(false); // boolean value
