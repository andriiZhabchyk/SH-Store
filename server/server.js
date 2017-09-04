/*const routes = require('./root/routes/routes');*/

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const db = require('./config/db');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const waterfall = require('async-waterfall');
const fs = require('fs');
const http = require('http');

let dBase;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

//
app.get('/shop/:category', function root(req, res) {
    const category = req.params.category;

    let subcategory = {
        category: category,
        itemSubcategory: []
    };

    /*waterfall([
     function (callback) {
     dBase.collection(`${category}`).find({category: category}, {items: {$slice: 4}}).toArray(callback);
     },
     function (items, callback) {
     if(!items) {
     callback(null, 'Not found!');
     } else {
     callback(null);
     }
     }
     ], function (err, result) {
     if (err) return next(err);
     res.render('category.hbs', result);
     });*/

    dBase.collection(`${category}`).find({category: category}, {items: {$slice: 4}}).toArray((err, item) => {
        if (err) {
            return res.send({'error': 'An error has occurred'});
        } else {
            subcategory.itemSubcategory = item;
            return res.render('category.hbs', subcategory);
        }
    });
});

//
app.get('/shop/:category/:subcategory', (req, res) => {
    dBase.collection(req.params.category).findOne({subcategory: req.params.subcategory}, (err, item) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.render('subcategory.hbs', item);
        }
    });
});


//
app.get('/shop/:category/:subcategory/filters', (req, res) => {
    const category = req.params.category,
        subcategories = req.params.subcategory,
        subcategory = {};

    dBase.collection(category).distinct('items.size', {subcategory: subcategories}, (err, sizes) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            subcategory.sizes = sizes;
        }
    });

    dBase.collection(category).distinct('items.brand', {subcategory: subcategories}, (err, brands) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            subcategory.brands = brands;
        }
    });

    dBase.collection(category).distinct('items.country', {subcategory: subcategories}, (err, country) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            subcategory.country = country;
            res.render('Filters.hbs', subcategory);
        }
    });
});


//
app.get('/:category/:subcategory/:id', (req, res) => {
    let itemData = {
        category: req.params.category,
        subcategory: req.params.subcategory,
        id: req.params.id
    };

    dBase.collection(itemData.category).aggregate(
        {
            $match: {subcategory: itemData.subcategory}
        },
        {
            $unwind: '$items'
        },
        {
            $match: {'items.id': {$eq: parseInt(itemData.id)}}
        },
        {
            $project: {
                items: 1,
                value: '$items.value',
                scope: '$items.scope'
            }
        },
        (err, item) => {
            if (err) {
                return ({'error': 'An error has occurred'});
            } else {
                item[0].category = itemData.category;
                item[0].subcategory = itemData.subcategory;
                console.log(item);
                return res.render('single.hbs', item);
            }
        });
});


//search data for filter data params
app.post('/shop/:category/:subcategory/search?', (req, res) => {
    let minPrice = JSON.parse(req.body.minPrice),
        maxPrice = JSON.parse(req.body.maxPrice),
        country = req.body.country,
        brand = req.body.brands,
        size = req.body.sizes,
        data = {
            subcategory: req.params.subcategory
        },
        items = [];

    let item = {
        minPrice: minPrice,
        maxPrice: maxPrice,
        country: country,
        brand: brand,
        size: size
    };

    dBase.collection(req.params.category).aggregate(
        {
            $match: {subcategory: req.params.subcategory},
        },
        {
            $unwind: '$items'
        },
        {
            $match: {
                'items.price': {$gte: item.minPrice, $lte: item.maxPrice},
                'items.country': {$in: item.country},
                'items.brand': {$in: item.brand},
                'items.size': {$in: item.size}
            }
        },
        {
            $project: {
                items: 1,
                value: '$items.value',
                scope: '$items.scope'
            }
        }, (err, filterData) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                for (let item of filterData) {
                    items.push(item.items);
                }
                data.items = items;

                if (items.length === 0) {
                    res.send('No results was found. Please, try again!')
                } else {
                    res.render('SearchItems.hbs', data);
                }
            }
        });
});


//register new user
app.post('/api/users', (req, res, next) => {
    const firstName = req.body.firstName,
        lastName = req.body.lastName,
        userName = req.body.userName,
        email = req.body.email,
        password = req.body.password;

    waterfall([
        function (callback) {
            dBase.collection('users').findOne({email: email}, callback);
        },
        function (user, callback) {
            if (user) {
                if (user.password === password) {
                    callback(null, "User with this email has already register!");
                } else {
                    next(new HttpError(403, "Wrong password"));
                }
            } else {
                const user = {
                    firstName: firstName,
                    lastName: lastName,
                    userName: userName,
                    email: email,
                    password: password
                };

                dBase.collection('users').insert(user, function (err) {
                    if (err) return next(err);
                    callback(null, user)
                });
            }
        }

    ], function (err, user) {
        if (err) return next(err);
        res.status(200).json("You are successful register!");
    });
});


app.use(function (req, res) {
    if (req.url === '/login') {
        res.sendfile(path.join(__dirname, '../public/assets/pages', 'login.html'));
    } else if (req.url === '/bascket') {
        res.sendfile(path.join(__dirname, '../public/assets/pages', 'bascket.html'));
    } else if (req.url === '/about') {
        res.sendfile(path.join(__dirname, '../public/assets/pages', 'about.html'));
    } else if (req.url === '/contact') {
        res.sendfile(path.join(__dirname, '../public/assets/pages', 'contact.html'));
    }
});

//start server, connect to mongodb
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    dBase = database;
    app.listen(8000, () => {
        console.log(`Server start in 8000`);
    });
});


