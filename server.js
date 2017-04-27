'use strict';

const express    = require('express');
const morgan     = require('morgan');
const cors       = require('cors');
const app        = express();
const PORT       = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors())
app.use(express.static('public'));
app.use(express.static('uploads'));

require('./app/models/db');
require('./app/routes')(app);

app.listen(PORT, () => console.log('Server Up And Running On Port %s', PORT));