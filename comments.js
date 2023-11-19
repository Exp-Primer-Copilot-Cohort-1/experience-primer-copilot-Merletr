// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const comments = require('./comments');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
    const { name, message } = req.body;
    comments.addComment(name, message);
    res.json({ message: 'Comment added!' });
});

app.listen(8000, () => {
    console.log('listening on port 8000');
});