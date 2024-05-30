import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../database/db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoutes from '../routes/user.route.js'


const app = express()
dotenv.config()

app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

connectDB()



// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);