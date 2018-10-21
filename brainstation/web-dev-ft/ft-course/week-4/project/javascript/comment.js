// Container from where all user values are grabbed
let commentForm = document.getElementById('grabComments');

commentForm.addEventListener("submit", function(e) {
    // Prevents page from auto-refreshing
    e.preventDefault();
    
    // Clears DOM of comment posts section
    document.getElementById('comments__posts').innerHTML="";
    
    // Comment posted confirmation message
    setTimeout(() => {messageAppear()}, 10);
    setTimeout(() => {messageDisppear()}, 2000);
    
    // Get values and subsequently display values
    getVal();
    displayComment(arrayOfDynamicComments);    
    
    // Clear fields 
    document.getElementById('name').value = "";
    document.getElementById('comment').value = "";
});

// Empty array to capture dynamic data from html form
let arrayOfDynamicComments = [];

// Hard-coded array with objects for testing purposes
// To test, please replace 'arrayOfDynamicComments' with 'arrayOfSampleComments'
// in the displayComment function above and enter userName and userComment in 
// the html form fields and press the button, 'POST COMMENT'
let arrayOfSampleComments = [
    { 
        userName: "Jack Deng",
        userComment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    },
    { 
        userName: "Corey Kohan",
        userComment: "Its just amazing all the sounds that come out of this band. Neil is just an animal on the drum kit and Geddy and Alex are just as good on their instruments."
    },
    { 
        userName: "Edward Anthony",
        userComment: "These guys are beyond great. The opening melody was incredible and had to be very difficult. The #1 band I regret not seeing LIVE."
    },
    { 
        userName: "Jill Saunders",
        userComment: "Masters of their instruments and on time with each other all the time, perfect what a pleasure."
    }
]


// Message confirming to user that their comment posted
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
    arrayOfDynamicComments.push(obj);
}

// Displays userNames and userComments 
function displayComment(commentObject) {
    for (i=0; i < commentObject.length; i++) {
        
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
        timeElement.id = 'comments__posts__name--time';
        paragraphElement.className = 'comments__posts__name--paragraph'; 

        // Elements in-line css
        nameElement.style.cssText="width: 590px; margin-left: 7.5em; border-top: 1px solid #D7D7D7; padding: 2em 0;"
        spanElement.style.cssText = "width: 100%; font-size: 1.25em; font-family: 'Poppins-Bold';";
        timeElement.style.cssText = "width: 100%; font-size: 1.25em; font-family: 'Poppins-Regular';  padding-left: 1em; color: #A0A0A0; ";
        paragraphElement.style.cssText = "width: 100%; font-size: 1.25em; font-family: 'Poppins-Regular'; padding-top: 1em;";

        // Elements attached to their relative parents
        nameElement.appendChild(spanElement);
        nameElement.appendChild(timeElement);
        nameElement.appendChild(paragraphElement); 
        commentSection.appendChild(nameElement);

        // userNames, userComments, and time displayed
        spanElement.innerHTML = commentObject[i].userName;        
        timeElement.innerHTML = dispalyTime();
        paragraphElement.innerHTML = commentObject[i].userComment;    
    }        
}
 
//Displays date when userComment is posted
function dispalyTime() {
    
    // Build current date 
    let currentDate = new Date();
    let currentYear = currentDate.getYear();
        if (currentYear < 1000) {
            currentYear += 1900;
        }
    let currentDay = currentDate.getDay();
    let currentMonth = currentDate.getMonth();
    let currentDayOfMonth = currentDate.getDate();
    
    let dayOfWeekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthArray = [];
    monthArray[0] = "January";
    monthArray[1] = "February";
    monthArray[2] = "March";
    monthArray[3] = "April";
    monthArray[4] = "May";
    monthArray[5] = "June";
    monthArray[6] = "July";
    monthArray[7] = "August";
    monthArray[8] = "September";
    monthArray[9] = "October";
    monthArray[10] = "November";
    monthArray[11] = "December";

    // Build current time    
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();    
        if (hour === 24) {
            hour = 0;
        } else if (hour > 12) {
            hour = hour - 0;
        }

        if (hour < 10) {
            hour = "0" + hour;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

    // Assign a variable to the element id where timestamp will appear 
    let postTimeId = document.getElementById("comments__posts__name--time");
    
    // Display newly formatted timestamp
    let timeStamp = postTimeId.innerHTML = "" + dayOfWeekArray[currentDay]+ " " + currentDayOfMonth + " " + monthArray[currentMonth] + " " +  currentYear + " | " + hour + ":" + minutes + ":" + seconds; 

    return timeStamp;     
}

setInterval(() => {
    dispalyTime();
}, 5000);