import express from 'express'
import mongoose from 'mongoose'
import Posts from './src/Schema/Posts/Posts.js';
import router from './src/Routs/router.js';


const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || 'mongodb+srv://puchkovdd:puchkovdd@cluster0.0gxl4ak.mongodb.net/?retryWrites=true&w=majority'


const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log(`Server started om PORT ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

startApp()



