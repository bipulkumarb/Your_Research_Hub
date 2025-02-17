// const express = require('express')
// const colors = require('colors')

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
// import cors from 'cors';

dotenv.config();

// database connection
connectDB();

const app = express()

// middleware

// app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes

app.use('/api/v1/auth', authRoutes)

// api

app.get('/', (req, res) => {
      res.send("<h1>Welcome to our app</h1>")
})

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white)
})