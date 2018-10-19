var commentForm = document.getElementById('grabComments');
        
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();    
    alert('Form was submitted!');
    getVal();
    displayVal();
});

let names = [];
let comments = [];

function getVal() {
    let userName = document.getElementById('name').value;
    let userComment = document.getElementById('comment').value;
    names.push(userName);
    comments.push(userComment);    
}

function displayVal() {
    for (i=0; i<names.length; i++) {
        let commentSection = document.getElementById("comments__container");
        
        let nameElement = document.createElement('div');
        let spanElement = document.createElement('span');
        let timeElement = document.createElement('span')

        nameElement.appendChild(spanElement);
        nameElement.appendChild(timeElement);
        commentSection.appendChild(nameElement);
        spanElement.innerHTML = names[i];
        timeElement.innerHTML = dispalyTime()

        let commentElement = document.createElement('div');
        let paragraphElement = document.createElement('p');

        commentElement.appendChild(paragraphElement);
        commentSection.appendChild(commentElement);
        paragraphElement.innerHTML = comments[i];        
    }
}

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