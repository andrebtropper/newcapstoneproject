import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const express = require('express')
const app = express()
const port = 5001
const bodyParser = require('body-parser');

const cors = require('cors')
app.use(cors())

app.use(express.json())

const mongoose = require('mongoose')

mongoose.connect(source, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

const userRoutes = require('./controllers/user.controller')
app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`Node Todo API is running on port: ${port}`)
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    return res.send("Hello World!")
});