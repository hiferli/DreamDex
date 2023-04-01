import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDatabase from './MongoDB/Connect.js'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.get('/' , async (request , response , next) => {
    response.send("Hello from Your World!")
})

const startServer = async () => {
    try {
        connectDatabase(process.env.MONGODB_URL);
        app.listen(3000 , () => {
            console.log("Listening on PORT: 3000")
        })
    } catch (error) {
        console.log("Error Connecting Database: " + error)
    }

}

startServer();