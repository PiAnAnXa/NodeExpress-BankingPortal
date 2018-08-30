const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT,() => {
    console.log(`PS Project Running on port ${PORT}!`);
});