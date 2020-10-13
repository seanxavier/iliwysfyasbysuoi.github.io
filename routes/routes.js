const express = require('express');

const controller = require('../controllers/controller.js');
	

const app = express();

app.get('/',controller.getHome);
app.get('/home',controller.getHome);

app.get('/Cryptogram', controller.getCryptogram);
app.post('/Cryptogram', controller.postCryptogram);

app.get('/Aurelias-Foot-Fetish/:code', controller.getAureliasFoot);
app.post('/Aurelias-Foot', controller.postAureliasFoot);

app.get('/Nonogram-hmmmmm/:code', controller.getNonogram);
app.post('/Nonogram', controller.postNonogram);

app.get('/Steve-AntiCheatTextHere/:code', controller.getSteve);
app.post('/Steve', controller.postSteve);

app.get('/End/:code', controller.getEnd);

module.exports = app;
