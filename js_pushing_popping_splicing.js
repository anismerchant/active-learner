var myArray1 = new Array();

//push() function: add a new element to the end of an array.
myArray1.push('Apples');
myArray1.push('Oranges');
myArray1.push('Pears');
var array_values = myArray1;
var length = myArray1.push('Bananas'); //returns the new array length.
console.log(array_values); //returns the array values.
// output: [ 'Apples', 'Oranges', 'Pears', 'Bananas' ]
console.log(length);
// output: 4


//push() function replaces and add values at index specified.
var myArray2 = ["Pinapples", "Straberries", "Blueberries"];
myArray2[1] = "Cherries";
myArray2[3] = "Kiwi";
console.log(myArray2);
//output:  [ 'Pinapples', 'Cherries', 'Blueberries', 'Kiwi' ]


//pop() function: removes the last element from an array and returns that value.
var myArray3 = ["Apples", "Oranges", "Pears"];
var lastElement = myArray3.pop();
console.log(lastElement);
//output: Pears
console.log(myArray3);
//output: [ 'Apples', 'Oranges' ]


/* splicing() function: changes the original array by adding or removing elements from an Array.
The function takes three parameters
(1) The index you will add/remove elements at
(2) The number of elements you wish to remove (set as 0 if you are not going to remove any
(3) The elements you wish to add (leave blank if you are not adding any elements).
*/

//adding elements
var myArray4 = ["Apples", "Oranges", "Pears"];
myArray4.splice(2,0, 'Cherries', 'Kiwis');

console.log(myArray4);
//output: ["Apples", "Oranges", "Cherries", "Kiwis", "Pears"]

//removing elements
var elements = myArray4.splice(1,2);

console.log(myArray4);
//output: ["Apples", "Kiwis", "Pears"]

console.log(elements); //elements arguments references values that were removed
//output: ["Oranges", "Cherries"]
