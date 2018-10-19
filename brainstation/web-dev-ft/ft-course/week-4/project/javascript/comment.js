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

        nameElement.appendChild(spanElement);
        commentSection.appendChild(nameElement);
        spanElement.innerHTML = names[i];
        
        let commentElement = document.createElement('div');
        let paragraphElement = document.createElement('p');

        commentElement.appendChild(paragraphElement);
        commentSection.appendChild(commentElement);
        paragraphElement.innerHTML = comments[i];        
    }
}