"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello world!');
});
app.get('/participantes', function (request, response) {
    response.send('Hello participator!');
});
app.get('/teste', function (request, response) {
    response.send('Hy tester!');
});
app.get('/instrutor', function (request, response) {
    response.send('Hy instruter!');
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port, "!"));
});
