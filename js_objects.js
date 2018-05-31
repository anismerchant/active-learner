//declaration with new operator
var myObject = new Object();

//most common way of declaring an object
var myObject = {}

//object declared with properties and values
var myObject = {
	key1:1,
	key2:"String",
}

//referencing object keys
console.log(myObject.key1);
console.log(myObject.key2);

//object declaration
var user = {
	name:'Anis',
	email:'anis@email.com',
	number:'647.123.4567'
}

//referencing object keys
console.log(user.name); //outputs "Anis"
console.log(user['name']); //also outputs "Anis"
console.log(user.email); //outputs "anis@email.com"
console.log(user['email']); //also outputs "anis@email.com"
console.log(user.number); //outputs "647.123.4567"
console.log(user['number']); //also outputs "647.123.4567"
