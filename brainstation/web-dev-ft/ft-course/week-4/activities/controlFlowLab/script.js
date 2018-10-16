/*
Create a number variable called time
Write an if/else block that...
Logs You're early! if time is less than 10
Logs You're on-time! if time is exactly 10
Logs You're late! for any other time
Create a string variable called timeOfWeek
You can expect that it will either hold a value of weekday or weekend
Modify your if/else block to only log it's messages on a weekday
Otherwise log You shouldn't be in class!
Come up with at least three different times to test your code with and try them out
*/

var time;
var timeOfWeek;

timeOfWeek = "weekend";
time = 10;

if (timeOfWeek === "weekday") {
    if (time === 10) {
        console.log("You're exactly on time!");
    } else if (time < 10) {
        console.log ("You're early!");
    } else {
        console.log ("You're late!");
    } 
} else {
    console.log("You shouldn't be in class!")
}

/*
Create a string variable called facialExpression
Write a switch statement that...
Logs You look happy if facialExpression is "smiling"
Logs You look sad if facialExpression is "frowning"
Logs You look angry if facialExpression is "scowl"
Logs I don't know for any other value
What happens when you forget to include break statements in each case?
*/

console.log("SWITCH STATEMENT SOLUTION");
var facialExpression;

switch (facialExpression) {
    case "smiling":
        console.log("You look happy.");
        break;
    case "frowning":
        console.log("You look sad.");
        break;
    case "scowl":
        console.log("You look angry.");
        break;
    default:
        console.log("I don't know");
}

/*
Create an array of strings called famousCats with at least three entries
You can use "garfield", "felix", "meowth"
Write a for loop that prints each cat to the console
Write a for loop that prints each cat, except the first to the console
Write a for loop that prints each cat to the console in reverse order
*/

var famousCats = ["garfield", "felix", "meowth"];

console.log("FOR LOOP SOLUTIONS");
for (i=0; i< famousCats.length; i++) {
    console.log(famousCats[i]);
}

for (i=1; i<famousCats.length; i++) {
    console.log(famousCats[i]);
}

for (i=famousCats.length-1; i>=0; i--) {
    console.log(famousCats[i]);
}


/*
Rewrite the previous exercise using a while loop
*/

console.log("WHILE LOOP SOLUTIONS");
i=0;
while (i < famousCats.length) {
    console.log(famousCats[i]);
    i++;
}

i=1;
while (i < famousCats.length) {
    console.log(famousCats[i]);
    i++;
}

i=famousCats.length-1;
while (i >= 0 ) {
    console.log(famousCats[i]);
    i--;
}


/*
Use your famousCats array from the previous exercise
Create a new string variable called myFavourite that holds the name of your favorite famous cat
Write a for loop that...
Logs Kitty? if the current cat is not your favorite cat
Logs There you are! if the current cat is your favorite cat and then breaks the loop
Test your loop with some different arrays
Favorite last
Favorite first
Favorite not in array
Empty array
*/

/* TEST CASES */
var myFavourite = "garfield";
// var myFavourite = "felix";
// var myFavourite = "meowth";
// var myFavourite = "abc";
// var famousCats = [];

console.log("FOR LOOP SOLUTION")
if (famousCats.length !== 0) {
    for (i=0; i < famousCats.length; i++) {   
        if (famousCats[i] === myFavourite) {
            console.log("There you are!");
            break;       
        } else {
            console.log("Kitty?");
        } 
    } 
} else {
    console.log("Oops, no kitties here! Check back later.")
}

/*
Rewrite the previous exercise using a while loop
Make sure that the loop terminates when...
Your favorite cat is found
Or the end of the array is reached
*/

console.log("WHILE LOOP SOLUTION");
i=0
if (famousCats.length !== 0) {
    while (i<famousCats.length) {
        if (famousCats[i] === myFavourite) {
            console.log("There you are!");
            break;       
        } else {
            console.log("Kitty?");
        }
        i++; 
    } 
    
} else {
    console.log("Oops, no kitties here! Check back later.")
}
