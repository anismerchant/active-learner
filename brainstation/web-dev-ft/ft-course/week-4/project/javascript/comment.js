// Container from where all user values are grabbed
let commentForm = document.getElementById('grabComments');
        
commentForm.addEventListener("submit", function(e) {
    // Prevents page from auto-refreshing
    e.preventDefault();
    
    // Clears DOM of comment posts section
    document.getElementById('comments__posts').innerHTML="";
    
    // Comment posted confirmation message
    setTimeout(() => {messageAppear()}, 10);
    setTimeout(() => {messageDisppear()}, 5000);
    
    // Get values and subsequently display values
    getVal();
    displayVal();
    
    // Clear fields 
    document.getElementById('name').value ="";
    document.getElementById('comment').value="";
});

let arrayOfComments = [];

// Message confirming to user that their comment posted.
function messageAppear() {
    let message = document.getElementById('message').innerHTML = "Thanks for sharing your comment!";
    return message;
}

// Message confirmation disappears
function messageDisppear() {
    let message = document.getElementById('message').innerHTML = "";
    return message;
}

// Grabs values from the comment form fields 
// and places them in the object
// which is subsequently pushed into an array
function getVal() {
    let obj = {};
    obj.userName = document.getElementById('name').value;
    obj.userComment = document.getElementById('comment').value;
    arrayOfComments.push(obj);
}

// Displays userNames and userComments 
function displayVal() {
    for (i=0; i < arrayOfComments.length; i++) {
        
        // Parent within which all constructed elements are placed
        let commentSection = document.getElementById('comments__posts');
        
        // Newly constructed elements: userName and userComment
        let nameElement = document.createElement('div');
        let spanElement = document.createElement('span');
        let timeElement = document.createElement('span');
        let paragraphElement = document.createElement('p');

        // Classes for each newly constructed elements: userName and userComment
        nameElement.className = 'comments__posts__name';
        spanElement.className = 'comments__posts__name--bold';
        timeElement.className = 'comments__posts__name--time';
        paragraphElement.className = 'comments__posts__paragraph--normal'; 

        // Elements styled in-line
        nameElement.style.cssText = " ";
        
        // Elements attached to their relative parents
        nameElement.appendChild(spanElement);
        nameElement.appendChild(timeElement);
        nameElement.appendChild(paragraphElement); 
        commentSection.appendChild(nameElement);

        // userNames and time displayed
        spanElement.innerHTML = arrayOfComments[i].userName;        
        timeElement.innerHTML = dispalyTime();
        paragraphElement.innerHTML = arrayOfComments[i].userComment;    
    }        
}
 
// Displays date when userComment was posted
function dispalyTime() {
    const month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    const date = new Date();
    const m = month[date.getMonth()];

    return m;
}