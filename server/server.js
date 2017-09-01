/*const routes = require('./root/routes/routes');*/

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express ();
const path = require('path');
const cors = require('cors');

let dBase;
let subcategory = {};

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.get('/:category', function root(req, res) {
    const category = req.params.category;

    let subcategory = {
        category: category,
        itemSubcategory: []
    };

    dBase.collection(`${category}`).find({category: category}, {items: {$slice: 4}}).toArray((err, item) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            subcategory.itemSubcategory = item;
            res.render('category.hbs', subcategory);
        }
    });
});

app.get('/:category/:subcategory', (req, res) => {
    dBase.collection(req.params.category).findOne({subcategory: req.params.subcategory}, (err, item) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.render('subcategory.hbs', item);
        }
    });
});

app.get('/:category/:subcategory/filters', (req, res) => {
    const category = req.params.category,
        subcategories = req.params.subcategory;

    dBase.collection(category).distinct('items.size', {subcategory: subcategories}, (err, sizes) => {
        subcategory.sizes = sizes;
    });

    dBase.collection(category).distinct('items.brand', {subcategory: subcategories}, (err, brands) => {
        subcategory.brands = brands;
    });

    dBase.collection(category).distinct('items.country', {subcategory: subcategories}, (err, country) => {
        subcategory.country = country;
        res.render('Filters.hbs', subcategory);
       /* res.send(subcategory);*/
    });
});

/*app.get('/:category/:subcategory/price', (req, res) => {
    const category = req.params.category,
        subcategories = req.params.subcategory;

    dBase.collection(category).findOne({subcategory: subcategories}, {$min: '$items.price'}, (err, price) => {
        res.render('Filters.hbs', subcategory);
         res.send(price);
    });
});*/

app.get('/:category/:subcategory/:id', (req, res) => {
    let itemData = {
        category: req.params.category,
        subcategory: req.params.subcategory
    };

    dBase.collection(req.params.category).findOne({subcategory: req.params.subcategory}, (err, items) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            for (let item of items.items) {
                if (item.id == req.params.id) {
                    itemData.item = item;
                    res.render('single.hbs', itemData);
                    break;
                    /*res.send(itemData);*/
                }
            }
        }
    });
});



app.post('/women/coats/search?', (req, res) => {
    const minPrice = req.body.minPrice,
        maxPrice = req.body.maxPrice,
        country = req.body.country,
        brand = req.body.brand,
        size = req.body.size;

    const item = {
        minPrice: minPrice,
        maxPrice: maxPrice,
        country: country,
        brand: brand,
        size: size
    };

    res.send(item);
});



app.all('/', function root(req, res) {
    res.sendFile(path.resolve('public', 'index.html'));
});

app.get('/login', function root(req, res) {
    res.sendFile(path.resolve('public/assets/pages', 'login.html'));
});

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    dBase = database;
    //start server
    app.listen(8005, () => {
        console.log(`Server start in 8005`) ;
    });
});

