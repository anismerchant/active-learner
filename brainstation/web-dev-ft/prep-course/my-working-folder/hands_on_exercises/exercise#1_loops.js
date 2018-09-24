/*
Exercise #1

The fizz buzz challenge: Fizz buzz is a common entry level challenge that interviewers use to quickly guage someone's program background. Print the numbers from 1 to 100 to the console, however for every number that is a multiple of 5 print the word fizz, for every number that is a multiple of 3 print buzz. If a number is both a multiple of 5 and 3 (like 15) print the word fizzbuzz. Hint: use if/else statements.
*/
function fizzBuzz() {
    for (number=1; number <= 100; number++){
        if (number % 5 == 0){
            if (number % 3 == 0){
                console.log('fizzbuzz');
            }
            console.log('fizz');
        } else if (number % 3 == 0) {
            console.log ('buzz');
        }
    }
}

fizzBuzz();
