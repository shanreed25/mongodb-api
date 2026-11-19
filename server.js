import 'dotenv/config'
import express from 'express'
import { MongoClient } from 'mongodb'
import dns from 'node:dns';//because DNS server is refusing DNS lookup
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
        await mongoClient.connect();//connect the client to the server
        
        console.log('Successfully connected to the database!');

        res.json({message: 'Successfully connected to the database!'})
    } catch (err) {
        console.error('Database connection error:', err.message);//show real error for debugging
        res.status(500).json({message: 'Failed to connect to the database.'})
    }

})


// start the server and listen
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})