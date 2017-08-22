const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const routes = require('./root/routes/routes');
const data = require('./config/data.json');
const app = express ();

app.use(bodyParser.urlencoded({ extended: true}));

/*app.post('/items', (req, res) => {
    db.collection('items').insert(req, (err, results) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(result.ops[0]);
        }
    });
});*/

console.log(data);

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    //start server
    app.listen(8000, () => {
        console.log(`Server start in 8000`) ;
    });
});

