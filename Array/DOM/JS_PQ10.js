// PQ 10   Create  3  divs with common class name - "box" Access 
//         them and add some unique text to 
//         each of them 
let divs = document.querySelectorAll(".box");
let idx = 1;
for(divs of divs){
    divs.innerText = `new unique value ${idx}`;
    idx++;
}
// divs[0].innerText = "New unique value 1";
// divs[1].innerText = "New unique value 2";
// divs[2].innerText = "New unique value 3";