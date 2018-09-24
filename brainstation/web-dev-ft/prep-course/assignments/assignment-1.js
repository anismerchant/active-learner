/*
Instructions:
1. Create a JavaScript file and name it assignment-1.js. Inside this file,
2. Create a variable named `numbers` and assign an empty array to it.
3. Using a for-loop and the Array push() method, insert the integers (numbers) 0 to 9 into the array you named numbers.
4. Test that you used the array push method correctly by console logging the first item in the array.
5. Console log the last item in the array.
6. Create another variable named car and assign an empty object to it.
7. Give the object a property called colour and assign it the value of "blank".
*/

//My Solution

//empty array
var numbers = [];

for (x = 0; x < 9; x++) {
    numbers.push(x);
}

console.log(numbers[0]);
console.log(numbers[8]);

// empty object
var car = {};

car.colour = "blank";

console.log(car.colour);
