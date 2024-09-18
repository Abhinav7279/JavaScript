let btn1 = document.querySelector("#btn1");
let body = document.querySelector("body");
let currbtn1 ="light";
btn1.addEventListener("click",() =>{
    
    if(currbtn1 === "light"){
        currbtn1 ="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currbtn1="light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currbtn1);

})