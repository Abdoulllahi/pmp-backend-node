/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 5:02:39 PM  CST
 * @ Last Modification Date: December 20, 2023 at 9:21:12 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

// dependencies
import express, { json } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import * as dotenv from "dotenv";
import path from "path";
import fs from "fs";
import propertyRouter from "../src/routes/property.route";

//init
dotenv.config();
const app = express();

//global config
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI
const accessLog = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

//mongoDb connection
(async function () {
    try {
        if (!MONGODB_URI) {
            console.log('DB URI is not defined in the environment variable');
            process.exit(1);
        }
        await mongoose.connect(MONGODB_URI);
        console.log('Successfully connected to the database');
    } catch (error) {
        console.log('Connection failed', error);
        process.exit(1);
    }
})();

//middlewares
app.use(morgan('combined', { stream: accessLog }));
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/', propertyRouter);

// error handling

// bootup
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});