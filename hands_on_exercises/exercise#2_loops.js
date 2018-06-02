/*
Exercise #2

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/

/*PSEUDO CODE
1. logs #, followed by a space, then #, followed by a space, then #, followed by space, then #, followed by space, newline
2. logs space space, followed by #, then space, and so forth
3. points 1 and 3 are repeated four times

*/

//SOLUTION 0
function chessBoard(character) {
    var rows = '';
    space = " ";
    piece = character;
    for (z=0; z < 8; z++) {
        for (x=0; x < 4; x++) {
            rows += piece;
            for (y=0; y < 1; y++) {
                rows += space;
            }
        }
        if (z % 2 == 0) {
            rows += '\n' + ' ';
        } else {
            rows += '\n';
        }
    }
    console.log('This is my solution 0: ' + '\n' + rows + '\n');
}
chessBoard('&')


//SOLUTION 1
var rows = '';
space = " ";
piece = "#";
for (z=0; z < 8; z++) {
    for (x=0; x < 4; x++) {
        rows += piece;
        for (y=0; y < 1; y++) {
            rows += space;
        }
    }
    if (z % 2 == 0) {
        rows += '\n' + ' ';
    } else {
        rows += '\n';
    }
}
console.log('This is my solution 1: ' + '\n' + rows + '\n');


//SOLUTION 2
var rows = [];
space = " ";
piece = "#";
for (z=0; z < 8; z++) {
    for (x=0; x < 4; x++) {
        rows.push(piece);
        for (y=0; y < 1; y++) {
            rows.push(space);
        }
    }
    if (z % 2 == 0) {
        rows.push('\n' + ' ');
    } else {
        rows.push("\n");
    }

}
console.log('This is my solution 2: ' + '\n' + rows.join('') + '\n');


//SOLUTION 3: Refactored Solution 4
console.log('This is my solution 3: ');
var rowOne = [];
var rowTwo = [];
space = " ";
piece = "#";
for (x=0; x < 4; x++) {
    rowOne.push(piece);
    for (y=0; y < 1; y++) {
        rowOne.push(space);
    }
}

for (x=0; x < 4; x++) {
    rowTwo.push(space);
    for (y=0; y < 1; y++) {
        rowTwo.push(piece);
    }
}

for (z=0; z < 4; z++) {
    var testOne = rowOne.join('');
    var testTwo = rowTwo.join('');
    console.log(testOne);
    console.log(testTwo);
}
console.log('\n')


// SOLUTION 4
console.log('This is my solution 4: ');
var rowOne = [];
var rowTwo = [];
space = " ";
piece = "#";
for (x=0; x < 4; x++) {
    rowOne.push(piece);
    for (y=0; y < 1; y++) {
        rowOne.push(space);
    }
}

for (x=0; x < 4; x++) {
    rowTwo.push(space);
    for (y=0; y < 1; y++) {
        rowTwo.push(piece);
    }
}
//console.log(chessBoard);

var testOne = rowOne.join('');
var testTwo = rowTwo.join('');
console.log(testOne);
console.log(testTwo);
console.log(testOne);
console.log(testTwo);
console.log(testOne);
console.log(testTwo);
console.log(testOne);
console.log(testTwo);
