// Arrays

//array literal
var superHeroes = ["micky mouse", "wonder woman", "thanos"];
console.log(superHeroes);
console.log(superHeroes[0]);
console.log(superHeroes[2]);
// grab last item for any array
console.log(superHeroes[superHeroes.length - 1]);

var emptyArray = [];
emptyArray.push("Mars");
emptyArray.push("Blockchain");
emptyArray.push("Community");
console.log(emptyArray);

var filledArray = emptyArray;
console.log(filledArray);
console.log(filledArray.pop());
console.log(filledArray.pop());
console.log(filledArray.pop());
console.log(filledArray.length);

//Objects
var bio = {
    firstName: "Anis",
    lastName: "Merchant",
    likesCoffee: true
}

var bioMirror = {};
bio.firstName["Sina"];
bio.lastName["tnahcreM"];
bio.likesCoffee[false];

//Dot Notation 
bio.likesCoffee;

//Square Bracket Notation
bioMirror["firstName"];

// Add console.log function
bio.speak = console.log;
console.log(bio);

var x = bio.speak;
x(bio["likesCoffee"]);
