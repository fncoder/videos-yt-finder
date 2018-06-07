const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const assets = __dirname + './../build';

app.use(bodyParser());
app.use(express.static(assets));

const port = process.env.PORT || 3001;
app.listen(port);
