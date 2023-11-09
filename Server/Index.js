import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDatabase from './MongoDB/Connect.js'

import postRoutes from './Routes/PostRoutes.js'
import AIRoutes  from './Routes/AIRoutes.js'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use("/api/v1/post" , postRoutes);
app.use("/api/v1/ai" , AIRoutes);

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