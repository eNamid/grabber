const { getMysql } = require('./src/mysql');
const { promises: {writeFile} } = require('fs');

(async () => {

    const connection = await getMysql();
    const products = await connection.query('SELECT * FROM product');
    const clients = await connection.query('SELECT * FROM client');
    
    await connection.close();

    const items = {};
    const people = {};
    
    for (const product of products) {
        items[product.id] = { ...product, id: undefined }
    }
    for (const client of clients) {
        people[client.id] = { ...client, id: undefined }
    }

    const convertItems =  JSON.stringify(items, null, 4); 
    const convertPeople = JSON.stringify(people, null, 4);

    await writeFile('./data/products.json', convertItems);
    await writeFile('./data/clients.json', convertPeople);
    
    console.log('Writed!');
    
    process.exit(0);
})();

