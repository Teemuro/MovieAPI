import { pgPool } from "./pg_connection.js";

const SQL = {
    GET_MOVIE : 'SELECT * FROM movie',
    GET_GENRE : 'SELECT * FROM genres',
    GET_USERS : 'SELECT * FROM useracc'
};

async function getMovie (){
    try {
        const result = await pgPool.query(SQL.GET_MOVIE)
        return result.rows;
    } catch (error){
        throw error;
    
    }
}
export {getMovie}

async function getGenres () {
    try {
        const result = await pgPool.query(SQL.GET_GENRE)
        return result.rows;
    } catch (error){
        throw error;

    }
}
export {getGenres}

async function getUsers () {
    try {
        const result = await pgPool.query(SQL.GET_USERS)
        return result.rows;
    } catch (error){
        throw error;

    }
}
export {getUsers}