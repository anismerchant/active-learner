/*
 Create a variable called `isTruthy` and set it's value to a Javascript expression (e.g.` var isTruthy = 'abc'`). 
*/

var isTruthy = 'abc';

/*
  Write an `if` statement that uses the `isTruthy`
  variable as the conditional. If isTruthy is
  *truthy* print out `isTruthy + ' is truthy.'`, 
  otherwise print out `isTruthy + ' is falsey.'` 
  Try changing the value of `isTruthy` to test 
  different values. 
*/

if (isTruthy === 'abc') {
  console.log(isTruthy + ' is truthy.');
} else {
  console.log(isTruthy + ' is falsey.');
}


/* 
  Create two variables, one called `a`, and one
  called `b` and set each one to a different
  number. Write an `if` statement that prints out
  whether `a` is greater than `b`. 

  Try changing the values of 'a' and 'b' to make sure
  your if statement correctly handles both cases.
*/

var a = 11;
var b = 40;

if (a > b) {
  console.log("'a' is greater than 'b'");
} else {
  console.log("'b' is greater than 'a'");
}

/* 
  Create another variable called c and set it's
  value to a number. Write an 'if' statement that
  prints out:
    c + ' is even'` 
  if c is even, 
    c + ' is odd'
  if c is odd, and 
    c + ' is not a number'
  if c is not a number.
  Test your code with different values for c to
  make sure it works as expected
*/

var c = 42;

if (c%2 == 0) {
  console.log(c + ' is even'); 
} else if (c%2 == 1) {
  console.log(c + ' is odd'); 
} else {
  console.log(c + ' is not a number');
}

/*
In the game of golf, you try to hit a ball towards a hole in the distance. The average number of strokes that a hole takes for a decent golfer is called par. Different amounts of a stroke have different names, for example if a golfer took 3 strokes when the par for a hole is 5, they got an eagle. 

Create two variables, one called 'par, and the other called 'stroke'. Write a series of if/else conditionals that will print out the appropriate message as follows: 
  1	: "Hole-in-one!"
  par - 3: "Double Eagle"
  par - 2 : "Eagle"
  par - 1 :	"Birdie"
  par	: "Par"
  par + 1	: "Bogey"
  par + 2	: "Double Bogey"
  Greater than par + 3	: "Time to hit the driving range!"

  Try assigning different values to the variable 'par' and 'stroke' to
  make sure your code outputs the correct message for each case.
*/

var par;
var stroke;

// Test Cases
par = 5;
stroke = 1; // incease by '1' to test different cases

if (stroke == 1) {
  console.log("Hole-in-one!")
} else if ((par - stroke) == 3) {
  console.log("Double Eagle");
} else if ((par - stroke) == 2) {
  console.log("Eagle");
} else if ((par - stroke) == 1) {
  console.log("Birdie");
} else if ((par - stroke) == 0) {
  console.log("Par");
} else if ((par - stroke) == -1) {
  console.log("Bogey");
} else if ((par - stroke) == -2) {
  console.log("Double Bogey");
} else if ((par - stroke) <= -3) {
  console.log("Time to hit the driving range!");
} else {
  console.log("No clue!");
}