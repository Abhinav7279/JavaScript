let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log("btn1 was clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// }

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = (evt) => {
    console.log("btn2 was click 2x");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
}
let div = document.querySelector("div");
div.onmouseover = (event)=> {
    console.log("you are inside the div");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
}

// EVENT LISTENER       
btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked");
});

btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked by handler 2");

});
let btn3 = ()=>{
    console.log("button 1 was clicked by handler 3");
    
}
btn1.addEventListener("click",btn3)
btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked by handler 4");
    
});
btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked by handler 5");
    
});
btn1.removeEventListener("click",btn3)