/*
Even numbers
Create a loop that goes through a random array of numbers and logs only the even ones. 
You can use the arrays given below or create some of your own to test your loop.

const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; // should log 8,2,4,8,2,4,8,4
const arr2 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2
*/

const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; // should log 8,2,4,8,2,4,8,4
const arr2 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2
/*
console.log("EVEN NUMBERS - arr1");
for (index = 0; index < arr1.length; index++) {
    if (arr1[index]%2 === 0) {
        console.log(arr1[index]);
    }
}

console.log("EVEN NUMBERS - arr2");
for (index = 0; index < arr2.length; index++) {
    if (arr2[index]%2 === 0) {
        console.log(arr2[index]);
    }
}


console.log("ODD NUMBERS - arr1");
for (i = 0; i < arr2.length; i++) {
    if (arr2[i]%2 === 1) {
        console.log(arr2[i]);
    }
}
console.log("ODD NUMBERS - arr2");
for (i = 0; i < arr1.length; i++) {
    if (arr1[i]%2 === 1) {
        console.log(arr1[i]);
    }
}
*/
/*
Largest number
Create a loop that goes through an array of numbers and returns the value of the largest number in the array. 
You can use the example arrays from Exercise 1 to test your loop.
*/

/*
console.log("LARGEST NUMBERS - arr1");
const arr3 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; // should log 8,2,4,8,2,4,8,4
const arr4 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2

x = arr4
var largestNumber=0;

for (i = 0; i < x.length; i++) {
    if (largestNumber >= x[i]) {
        largestNumber += 0;
    } else {
        largestNumber = x[i];
    }
}
console.log(largestNumber);
*/
/*
Number triangle
Create a loop that prints the integers from 1 to 4 in separate rows like the following:

 1
 22
 333
 4444
 
*/

for (x=1; x<=4; x++) {
    var string = "";
    for (y=0; y<x; y++){
        string += x.toString();        
    }
    console.log(string);
}