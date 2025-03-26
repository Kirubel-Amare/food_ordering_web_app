const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("food-ordering").collection("products");
        const categoriesCollection = client.db("food-ordering").collection("categories");

        // Insert categories with upsert
        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => ({ name: category }));
        for (const category of categories) {
            await categoriesCollection.updateOne(
                { name: category.name },
                { $setOnInsert: category },
                { upsert: true }
            );
        }

        // Fetch categories with _id
        categories = await categoriesCollection.find().toArray();

        // Insert products
        let imageUrls = [
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
        ];
        let products = [];
        for (let i = 0; i < 10; i++) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(), // Fix typo
                price: faker.commerce.price(),
                category: _.sample(categories)._id, // Use category _id
                imageUrl: _.sample(imageUrls),
            };
            products.push(newProduct);
        }

        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
