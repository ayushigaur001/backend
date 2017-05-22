"use strict";

const express = require('express')
const  app = express()

// sets up the app
require('./scripts/bootstrap')(app)

const routes = require('./routes/index')

app.get('/', routes.home)

app.get('/lbanner', routes.home)

app.get('/rbanner', routes.home)

app.get('/categories', routes.home)

app.get('/featurebox', routes.home)

// sets up error handlers
require('./scripts/errorhandling')(app)

module.exports = app
