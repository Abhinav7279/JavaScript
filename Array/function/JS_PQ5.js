// using function name
function countVovels(str){
    let count =0;
    for(let char of str){
        if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
            count++
        }
    }
    console.log(count);

}

// using Arrowfunction
let countvovels = (str)=>{
    let count =0;
    for(let char of str){
        if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
            count++
        }
    }
    console.log(count);
}