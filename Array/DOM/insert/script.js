//  PQ 11  create a new button  element . give it a  text"click me ", 
//background color of red and text color of white 
// insert  the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "click me !"

newBtn.style.color = "red" 
newBtn.style.textColor = " white";

document.querySelector("body").prepend(newBtn);

//  PQ 12  create <p> tag in html , give it a class and some styling
// now create a new class in css and try to append this class to the 
// <p> element 

// did you notice how you overwrite the class name when you add a 
// new one  solve this problem using class list 
