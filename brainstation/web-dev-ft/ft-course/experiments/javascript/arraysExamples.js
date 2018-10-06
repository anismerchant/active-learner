// Array Lengths
var arr = ['a', 'b', 'c'];
arr[0] // 'a'
arr[1] // 'b'
arr[2] // 'c'

arr.length // 3
arr[arr.length -1] // 'c'

// Modifying END OF Arrays
var students = ["John", "Jane", "Joan"];
students[students.length] = "Jim" // ["John", "Jane", "Joan", "Jim"]

students.push("Jack"); // ["John", "Jane", "Joan", "Jim", "Jack"]
var length = students.push("Janice"); // ["John", "Jane", "Joan", "Jim", "Jack", "Janice"]
console.log(length) // Prints 6

students.pop(); // ["John", "Jane", "Joan", "Jim", "Jack"]

var student = students.pop(); 
console.log(student); // Prints "Jack"

// Modifying BEGINNING OF Arrays
var studentsNew = ["Jake", "John", "Jane", "Joan", "Jim"]
console.log(studentsNew.shift("Jake")); // Prints "John"
console.log(studentsNew.unshift()); // Prints 4

// Modifying MIDDLE OF Arrays
var studentsMiddle = ["Jake", "John", "Jane", "Joan", "Jim"]
console.log(studentsMiddle.splice(2, 1)); // Prints "Jane"; it's what is removed