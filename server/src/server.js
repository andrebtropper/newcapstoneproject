
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const connectionString = 'mongodb://localhost:277017/YOBro';
mongoose.connect(connectionString, { useNewUrlParser: true });

const server = express();

server.use(bodyParser.json());

const userSchema = { fullname: String, username: String, age: Number };
const User = mongoose.model('YOBro', userSchema);

server.get('/', (request, response) => {
    response.json({ status: ' Server is up and running! ' });

});
server.get('/users', (request, response) => {
    User.find().then((user) => response.json(users));
});
server.post('/cats', (request, response) => {
    const kitty = new Cat({
        name: request.body.name,
        fur: request.body.fur,
        lives: request.body.lives
    });
    kitty
        .save()
        .then(kitty => response.json(`${kitty.name} says meow.`))
        .catch((error) => response.json(error));
});


server.listen(4000)