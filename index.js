import express from 'express'
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world')
})

// Start the server
app.listen(port, ()=>{
    console.log('Server runs on port: ' + port)
})