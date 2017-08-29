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

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.get('/men', function root(req, res) {
    let subcategory = {
        category: "Men",
        itemSubcategory: []
    };

    dBase.collection('menClothing').find({category: "men"}, {items: {$slice: 4}}).toArray((err, item) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            subcategory.itemSubcategory = item;
            res.render('category.hbs', subcategory);
        }
    });
});

app.get('/women', function root(req, res) {
    let subcategory = {
        category: "Women",
        itemSubcategory: []
    };

    dBase.collection('womenClothing').find({category: "women"}, {items: {$slice: 4}}).toArray((err, item) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            subcategory.itemSubcategory = item;
            res.render('category.hbs', subcategory);
        }
    });
});

app.get('/women/coats', function root(req, res) {
    let subcategory = {};

    dBase.collection('womenClothing').findOne({subcategory: "coats"},(err, item) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            subcategory = item;
        }
    });

    dBase.collection('womenClothing').distinct('items.size', {subcategory: "coats"}, (err, sizes) => {
        subcategory.sizes = sizes;
    });

    dBase.collection('womenClothing').distinct('items.brand', {subcategory: "coats"}, (err, brands) => {
        subcategory.brands = brands;
    });

    dBase.collection('womenClothing').distinct('items.country', {subcategory: "coats"}, (err, country) => {
        subcategory.country = country;
        res.render('subcategory.hbs', subcategory);
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

