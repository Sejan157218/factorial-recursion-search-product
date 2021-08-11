let totalsum = 1;
for (let i=1;i<9;i++){
    totalsum = totalsum + i;
}
console.log(totalsum);


function sum(i){
    if(i==1){
        return 1
    }
    return i + sum(i-1);
    // 9 + sum(9-1)
    // 9 + 8 + sum(8-1)
    // 9 + 7 + sum(7-1)
    // 9 + 6 + sum(6-1)
    // 9 + 5 + sum(5-1)
    // 9 + 4 + sum(4-1)
    // 9 + 3 + sum(3-1)
    // 9 + 2 + sum(2-1)
    // 9+8+7+6+5+4+3+2+1 = 45    
}

console.log(sum(9));