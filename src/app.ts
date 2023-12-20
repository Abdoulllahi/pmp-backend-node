/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 5:02:39 PM  CST
 * @ Last Modification Date: December 20, 2023 at 5:18:20 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

// dependencies
import express from "express";

//init
const app = express();

//global config
const PORT = process.env.PORT || 3000;
//mongoDb connection

//middlewares

// routes

// error handling

// bootup
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});