// search with name
// const products = [
//     {name:'poco m2 phone',price:25200},
//     {name:'poco m3 phone',price:50000},
//     {name:'laptop m2',price:41500},
//     {name:'dell m2',price:31500},
//     {name:'hp m2',price:2100},
//     {name:'hp m3',price:12500},
//     {name:'realmi phone',price:5100},
//     {name:'realmi phonex',price:8500},
// ]
// function search(puducts,serchtext){
//     let searchResult = [];
//     for (let product of products){
//         if (product.name.indexOf(serchtext) !=-1){
//             searchResult.push(product);
            
//         }
        
//     }
//     return searchResult;
// }

// console.log(search(products,'phone'));

// search with price

const products = [
    {name:'poco m2 phone',price:25200},
    {name:'poco m3 phone',price:50000},
    {name:'laptop m2',price:41500},
    {name:'dell m2',price:31500},
    {name:'hp m2',price:2100},
    {name:'hp m3',price:12500},
    {name:'realmi phone',price:5100},
    {name:'realmi phonex',price:8500},
]
function search(puducts,startprice,endprice){
    let searchResult = [];
    for (let product of products){
        if(product.price >= startprice && product.price <= endprice){
            searchResult.push(product);
        } 
    }
    return searchResult;
}

console.log(search(products,20000,30000));






