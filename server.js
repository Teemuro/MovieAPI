import express from 'express';

var app = express();

app.listen(3001, () => {
    console.log('If you see this, the server is running!');
});