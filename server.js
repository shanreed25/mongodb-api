import 'dotenv/config'
import express from 'express'
import { MongoClient } from 'mongodb'
import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);


//express app instance
const app = express()

//port
const port = process.env.PORT || 3001

//MongoClient using connection string
const mongoClient = new MongoClient(process.env.MONGO_URI)


//GET route
app.get('/', async (req, res) => {
    try {
        await mongoClient.connect();
        console.log('Successfully connected to the database.');

        res.json({message: 'Successfully connected to the database.'})
    } catch (err) {
        res.json({message: 'Failed to connect to the database.'})
    }

})


// start the server and listen
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})