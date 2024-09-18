// PQ 8 take a number  n as input from user . create an array of numbers from 1-n .
// a>  use the reduce method  to calculate  sum of all numbers in the array 
// b> use the reduce method  to calculate product of all numbers in the array 
let n = prompt("enter a number : ");
let arr = [];
for(let i=1; i<=n; i++){
    arr[i-1] = i;
};
console.log(arr);
// Qa> 
let sum = arr.reduce((pre, curr)=>{
    return pre + curr;
});
console.log("sum is " ,sum);

// Qb>
let multi = arr.reduce((pre,curr)=>{
    return  pre*curr;
});
console.log("multiple is: ", multi)
