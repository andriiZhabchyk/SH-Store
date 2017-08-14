const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
/*const routes = require('./root/routes/routes');*/
const data = require('./config/data.json');
const cors = require('cors');
const app = express ();
let base, clothingData;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/api/items/', (req, res) => {
    base.collection('clothing').insert(data, (err, results) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(data);
        }
    });
});

app.get('/clothing/men-clothing/', (req, res) => {
    base.collection('clothing').find().toArray((err, docs) => {
        if (err) {
            console.log(err);
            res.send({ 'error': 'An error has occurred' });
        }
        clothingData = docs;
        res.send(clothingData);
    });
});

MongoClient.connect(db.url, (err, database) => {
    if (err) {
        return console.log(err);
    }

    base = database;
    //start server
    app.listen(8080, () => {
        console.log(`Server start in 8080`) ;
    });
});

