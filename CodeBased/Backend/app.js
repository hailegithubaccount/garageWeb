const express = require('express');
require('dotenv').config();
const sanitize =require("sanitize");
const cors=require("cors");
const port = process.env.PORT || 3000;
const router = require('./routes');
const app = express();
const corsOptions={
    origin:process.env.FRONTEND_URL,
    optionsSuccessStatus:200
}

app.use(express.json());
app.use(cors());
app.use(sanitize.middleware);




// Use the router with a base path
app.use(router);

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});

module.exports = app;
