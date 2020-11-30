const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes');

app.use(cors());
app.use(route);

app.listen(3333); 