// PQ 7  we are given array  of marks of student . filter out of the  marks of student that scored 90+

let arr = [56,78,98,91,94,99]
let newScore = arr.filter((val)=>{
    return val>90;
});
console.log(newScore);