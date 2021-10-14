const { animals } = require('../Zookeeper/data/animals.json');
const express = require('express');
const app = express();



app.get('/api/animals', (req, res) => {
    res.json('animals');
});
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});