// Container from where all user values are grabbed

let commentForm = document.getElementById('grabComments');

commentForm.addEventListener("submit", function(e) {
    // Prevents page from auto-refreshing
    e.preventDefault();
    
    // Clears DOM of comment posts section
    document.getElementById('comments__posts').innerHTML="";
    
    // Comment posted confirmation message
    setTimeout(() => {messageAppear()}, 10);
    setTimeout(() => {messageDisppear()}, 4000);
    
    // Get values from API and subsequently display them
    postVal();
    
    // For testing purposes
    // displayComment(arrayOfSampleComments);
    
    // Clear fields 
    document.getElementById('name').value = "";
    document.getElementById('comment').value = "";
});

// Hard-coded array with objects for testing purposes
// To test, please replace 'arrayOfDynamicComments' with 'arrayOfSampleComments'
// in the displayComment function above and enter userName and userComment in 
// the html form fields and press the button, 'POST COMMENT'
let arrayOfSampleComments = [
    { 
        name: "Jack Deng",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    },
    { 
        name: "Corey Kohan",
        comment: "Its just amazing all the sounds that come out of this band. Neil is just an animal on the drum kit and Geddy and Alex are just as good on their instruments."
    },
    { 
        name: "Edward Anthony",
        comment: "These guys are beyond great. The opening melody was incredible and had to be very difficult. The #1 band I regret not seeing LIVE."
    },
    { 
        name: "Jill Saunders",
        comment: "Masters of their instruments and on time with each other all the time, perfect what a pleasure."
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

// Current Date | Reserved for future development
let currentDate = formattedDispalyTime();

// Empty array to capture dynamic data from html form
let arrayOfDynamicComments = [];

// Grabs data from the server
function getData() {
  const getPromise = fetch(baseUrl + commentsPath + queryString + API_KEY);
  getPromise.then((response) => {
    return response.json();
    })
    .then((data) => {
        arrayOfDynamicComments = data;
        return displayComment(arrayOfDynamicComments);
    });    
}

// Grabs data and posts when 'Home' page refreshes 
getData();

// Grabs data from the form and sends it to server
function postVal() {
    let obj = {};       
    obj.name = document.getElementById('name').value;
    obj.comment = document.getElementById('comment').value;

    const init = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'content-Type': 'application/json',
        }
    }
    const postPromise = fetch(baseUrl + commentsPath + queryString + API_KEY, init);
    
    postPromise.then((response) => {
        return response.json();
    })
    .then((data) => {
        arrayOfDynamicComments.push(data);
        return displayComment(arrayOfDynamicComments);
    });
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
        timeElement.id = commentObject[i].id;
        timeElement.className = 'comments__posts__name--time';
        paragraphElement.className = 'comments__posts__name--paragraph'; 

        // Elements in-line css
        const mq = window.matchMedia("(max-width:760px)");
        if (mq.matches) {
            nameElement.style.cssText="width: 320px; margin-left: 1.1em; border-top: 1px solid #D7D7D7; padding: 2em 0; font-size: 1em;"
        } else {
            nameElement.style.cssText="width: 590px; margin-left: 7.5em; border-top: 1px solid #D7D7D7; padding: 2em 0;"
        }      
                
        spanElement.style.cssText = "width: 100%; font-size: 1.25em; font-family: 'Poppins-Bold';";
        
        if (mq.matches) {
            timeElement.style.cssText="width: 100%; font-size: 1em; font-family: 'Poppins-Regular';  padding-left: 1em; color: #A0A0A0;";
        } else {
            timeElement.style.cssText="width: 100%; font-size: 1.25em; font-family: 'Poppins-Regular';  padding-left: 1em; color: #A0A0A0;";
        }          
      
        paragraphElement.style.cssText = "width: 100%; font-size: 1.25em; font-family: 'Poppins-Regular'; padding-top: 1em;";

        // Elements attached to their relative parents
        nameElement.appendChild(spanElement);
        nameElement.appendChild(timeElement);
        nameElement.appendChild(paragraphElement); 
        commentSection.appendChild(nameElement);

        // userNames, userComments, and time displayed
        spanElement.innerHTML = commentObject[i].name;        
        paragraphElement.innerHTML = commentObject[i].comment;
        //timeElement.innerHTML = commentObject[i].timestamp;
        
        let date = new Date();
        let milliSeconds = date.getTime();
        let timeElapsed = Math.floor((milliSeconds - commentObject[i].timestamp) / 1000);      
        timeElement.innerHTML = Math.floor(timeElapsed);
        if (timeElement.innerHTML < 60) {
            timeElement.innerHTML = "Just now";       
        } else if (timeElement.innerHTML < 120) {
            timeElement.innerHTML = "About 1 minute ago";
        } else if (timeElement.innerHTML < 180) {
            timeElement.innerHTML = "About 2 minutes ago";
        } else if (timeElement.innerHTML < 240) {
            timeElement.innerHTML = "About 3 minutes ago";
        } else if (timeElement.innerHTML < 300) {
            timeElement.innerHTML = "About 4 minutes ago";
        } else if (timeElement.innerHTML < 360) {
            timeElement.innerHTML = "About 5 minutes ago";
        } else if (timeElement.innerHTML > 360 && timeElement.innerHTML < 1800) {
            timeElement.innerHTML = "About 10 minutes ago";
        } else if (timeElement.innerHTML > 1800 && timeElement.innerHTML < 3600) {
            timeElement.innerHTML = "About 30 minutes ago";
        } else if (timeElement.innerHTML > 3600 && timeElement.innerHTML < 7200) {
            timeElement.innerHTML = "More an hour ago";
        } else if (timeElement.innerHTML > 7200 && timeElement.innerHTML < 10800) {
            timeElement.innerHTML = "More two hours ago";
        } else if (timeElement.innerHTML > 10800 && timeElement.innerHTML < 43200) {
            timeElement.innerHTML = "More than 6 hours ago";
        } else if (timeElement.innerHTML > 43200 && timeElement.innerHTML < 86400) {
            timeElement.innerHTML = "More than 12 hours ago";
        } else if (timeElement.innerHTML > 86400 && timeElement.innerHTML < 172800) {
            timeElement.innerHTML = "More than a day ago";
        } else if (timeElement.innerHTML > 172800 && timeElement.innerHTML < 345600) {
            timeElement.innerHTML = "More than two days";
        } else if (timeElement.innerHTML > 345600 && timeElement.innerHTML < 2592000) {
            timeElement.innerHTML = Math.floor((milliSeconds - commentObject[i].timestamp) / 1000/3600/24) + " days ago";
        } else {
            timeElement.innerHTML = "About " + Math.floor((milliSeconds - commentObject[i].timestamp) / 1000/3600/24/30) + " months ago";
        }
    }        
}
     
//For future Development | Displays date when userComment is posted
function formattedDispalyTime() {
    
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
    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   

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
   
    // Display newly formatted timestamp
    // let timeStamp = "" + seconds;
    // let timeStamp = postTimeId.innerHTML = "" + currentYear + " " + currentMonth + " " + currentDay + "T" + hour + ":" + minutes + ":" + seconds +"Z"
    // let timeStamp = postTimeId.innerHTML = "" + dayOfWeekArray[currentDay]+ " " + currentDayOfMonth + " " + monthArray[currentMonth] + " " +  currentYear + " | " + hour + ":" + minutes + ":" + seconds;
    let timeStamp = dayOfWeekArray[currentDay]+ " " + currentDayOfMonth + " " + monthArray[currentMonth] + " " +  currentYear;
    
    return timeStamp;     
}

/* Experiments 
function grabTimeStamp() {
    const timePromise = fetch(baseUrl + commentsPath + queryString + API_KEY);
    timePromise.then((response) => {
        return response.json();
        })
    .then((data) => {
        arrayOfDynamicComments = data;
        //console.log(arrayOfDynamicComments);
    });    
}

setInterval(() => {
    grabTimeStamp();
}, 5000);
*/