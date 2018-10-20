var commentForm = document.getElementById('grabComments');
        
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();    
    document.getElementById('comments_posts').innerHTML="";
    setTimeout(() => {messageAppear()}, 10);
    setTimeout(() => {messageDisppear()}, 3000);
    // alert('Form was submitted!'); 
    getVal();
    displayVal();
    document.getElementById('name').value ="";
    document.getElementById('comment').value="";
});

let arr = [];

function messageAppear() {
    let message = document.getElementById('message').innerHTML = "Thanks for sharing your comment!";
    return message;
}

function messageDisppear() {
    let message = document.getElementById('message').innerHTML = "";
    return message;
}

function getVal() {
    let obj = {};
    obj.userName = document.getElementById('name').value;
    obj.userComment = document.getElementById('comment').value;
    arr.push(obj);
}

function displayVal() {
    for (i=0; i<arr.length; i++) {
        let commentSection = document.getElementById('comments_posts');
        
        let nameElement = document.createElement('div');
        let spanElement = document.createElement('span');
        let timeElement = document.createElement('span')

        nameElement.appendChild(spanElement);
        nameElement.appendChild(timeElement);
        commentSection.appendChild(nameElement);

        spanElement.innerHTML = arr[i].userName;
        timeElement.innerHTML = dispalyTime();

        let commentElement = document.createElement('div');
        let paragraphElement = document.createElement('p');

        commentElement.appendChild(paragraphElement);
        commentSection.appendChild(commentElement); 
        paragraphElement.innerHTML = arr[i].userComment;
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