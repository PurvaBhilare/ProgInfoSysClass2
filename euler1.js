// let sum = 0
// for(let i=1;i<1000;i++){
//     if(i%3==0 || i%5==0){
//         sum += i
//     }
// }
// console.log(`Sum of mulyiples of 3 or 5 below 1000 is ${sum}`)

// Create a functn to find the sum of all the multiples of and b where s,b,n are function parameters

sumOfMultiples = (a,b,n) =>{
    let sm = 0
    for(let i=1;i<n;i++){
        if(i%a==0 || i%b==0){
            sm += i
        }
    }
    return sm
}
//test 1
//console.log(sumOfMultiples(3,5,1000))
