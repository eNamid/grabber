const { watchFile, promises: {readFile} } = require('fs');

(async () => {
   
    try {
        watchFile('./data/products.json', async () => {
            
            const products = await readFile('./data/products.json');
            
            const convert = JSON.parse(products);

            let obj = {};

            for(const key in convert) {
                const { type, name, weight, price } = convert[key];
                if(type == 'взуття') {
                
                    obj[name] = {weight: parseFloat(weight), price: parseFloat(price)};
                
                }
            }

            console.log(obj);

        });
    } catch (err) {
        console.log(err)
    }
})() 

// (async () => {
   
//     let res = {};
//     for(const key in products){

//         if(products[key].country == 'Китай'){

//             res[key] = products[key].name + ' ' + products[key].country + ' ' + products[key].manufacturer;
        
//         }
//     }
//     console.log(res);
// })() 