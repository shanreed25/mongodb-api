import express from 'express'


const app = express()

const port = process.env.PORT || 3001


app.get('/', (req, res) => {
    res.send("Hello From Express")
})


// start the server and listen
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})