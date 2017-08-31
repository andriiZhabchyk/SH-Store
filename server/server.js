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

app.all('/', function root(req, res) {
    res.sendFile(path.resolve('public', 'index.html'));
});

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    dBase = database;
    //start server
    app.listen(8005, () => {
        console.log(`Server start in 8005`) ;
    });
});

