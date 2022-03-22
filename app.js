const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port, () => {
    console.log(`*** LISTENING ON PORT ${port} ***`)
});