console.log(document.getElementById("nav-bar"));
console.log(document.querySelector("main"));
console.log(document.querySelectorAll('a'));
console.log(document.querySelector('a'));

setTimeout(() => {
  let element = document.querySelector(".logo");
  console.log(element.innerHTML);
  element.innerHTML = "BrainStation"
}, 1000);

setTimeout(() => {
  let elements = document.querySelectorAll("a");
  elements.forEach((element) => {
    element.style.textDecoration = "underline";
  });
}, 1000);