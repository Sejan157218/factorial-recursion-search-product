let factorialOf7 = 1;
for (let i=1;i<=7;i++){
    factorialOf7 = factorialOf7 * i;
}
console.log(factorialOf7)


function factorial(num){
    if (num==1){
        return 1;
    }
    return num * factorial(num-1) 
}
console.log(factorial(7));

