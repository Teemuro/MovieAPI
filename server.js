import express from 'express';
import { pgPool } from './pg_connection.js';
import { getMovie, getUsers } from './db_queries.js';

const app = express();
app.use(express.urlencoded({extended: true}));

app.listen(3001, () => {
    console.log('If you see this, the server is running!');
}); //Listens to the port and starts the server, give info to console if server is turned on.

app.get('/', (req,res) => {
    res.json('Try something else. This is the root.')
})

app.get('/genres', async (req,res) =>{
    try {
        const result = await pgPool.query('SELECT * FROM genres')
        res.json({Genres: result.rows});
    } catch (error){
        res.status(400).json({ error: error.message});

    }
}) //Gets data from genres table

app.post('/genres', async (req,res) => {
    
    const genrename = req.body.genre;
    const GenreID = req.body.genreid;

    try {
        await pgPool.query('INSERT INTO genres VALUE ($1, $2', [GenreID, genrename])
        res.end();
    } catch (error){
        res.status(400).json({ error: error.message});

    }
}) //Adds data to genres table

app.get('/movie', async (req,res) =>{
    try {
        const result = await getMovie();
        res.json(result);
    } catch (error){
        res.status(400).json({ error: error.message});

    }
}) //Gets movie names from the database

app.post('/movie', async (req,res) => {

    try {
        await pgPool.query(
            'INSERT INTO movie (movieid, moviename, releaseyear, genre, tag, review) VALUE ($1, $2, $3, $4, $5, $6', 
            [movieid, moviename, releaseyear, genre, tag, review])
        res.end();
    } catch (error){
        res.status(400).json({ error: error.message});

    }
}) //Post movie into the database

app.get('/review', async (req,res) =>{
    try {
        const result = await pgPool.query('SELECT * FROM review')
        res.json({Reviews: result.rows});
    } catch (error){
        res.status(400).json({ error: error.message});

    }
})

app.post('/review', async (req,res) => {
    try {
        await pgPool.query(
            'INSERT INTO review (reviewid, username, stars, text, movideid) VALUE ($1, $2, $3, $4, $5',
             [reviewid, username, statusbar, text, movieid])
        res.end();
    } catch (error){
        res.status(400).json({ error: error.message});

    }
})

app.get('/useracc', async (req,res) =>{
    try {
        const result = await getUsers()
        res.json(result);
    } catch (error){
        res.status(400).json({ error: error.message});

    }
})
                                                                                                                                                                        //This code was made by TR aka Teemuro(EasterEgg)
app.post('/useracc', async (req,res) => {
    try {
        await pgPool.query(
            'INSERT INTO useracc (userid, username, password, yearofbirth, favoritemovie) VALUE ($1, $2, $3, $4, $5',
             [userid, username, password, yearofbirth, favoritemovie])
        res.end();
    } catch (error){
        res.status(400).json({ error: error.message});

    }
})
//not going to comment on everything, you know how this stuff works.