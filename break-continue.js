const products = [
    {name:'poco m2 phone',price:25200},
    {name:'poco m3 phone',price:50000},
    {name:'laptop m2',price:41500},
    {name:'dell m2',price:31500},
    {name:'hp m2',price:2100},
    {name:'hp m3',price:12500},
    {name:'realmi phone',price:5100},
    {name:'realmi phonex',price:8500},
    {name:'hp m3',price:12500},
]
// function breakcontinue(products){
//     for (let product of products){
//         if (product.price<10000){  
//             break;
//         }
//         console.log(product); 
//     }
// }
function breakcontinue(products){
    for (let product of products){
        if (product.price<10000){  
            continue;
        }
        console.log(product); 
    }
}
console.log(breakcontinue(products));