import express from 'express';
import { pgPool } from './pg_connection.js';

const app = express();
app.use(express.urlencoded({extended: true}));

app.listen(3001, () => {
    console.log('If you see this, the server is running!');
});

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
})

app.post('/genres', async (req,res) => {
    
    const genrename = req.body.genre;
    const GenreID = req.body.genreid;

    try {
        await pgPool.query('INSERT INTO genres VALUE ($1, $2', [GenreID, genrename])
        res.end();
    } catch (error){
        res.status(400).json({ error: error.message});

    }
})

app.get('/movie', async (req,res) =>{
    try {
        const result = await pgPool.query('SELECT * FROM movie')
        res.json({Movies: result.rows});
    } catch (error){
        res.status(400).json({ error: error.message});

    }
})

app.get('/review', async (req,res) =>{
    try {
        const result = await pgPool.query('SELECT * FROM review')
        res.json({Reviews: result.rows});
    } catch (error){
        res.status(400).json({ error: error.message});

    }
})

app.get('/useracc', async (req,res) =>{
    try {
        const result = await pgPool.query('SELECT * FROM useracc')
        res.json({Users: result.rows});
    } catch (error){
        res.status(400).json({ error: error.message});

    }
})