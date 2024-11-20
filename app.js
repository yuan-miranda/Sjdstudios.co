// app.js

const express = require('express');
require('dotenv').config();

const pageRoutes = require('./routes/pageRoutes');
const { initDb } = require('./utils/initDb');
const { getDateTime } = require('./utils/time');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("static"));
app.use("/media", express.static("media"));

app.use('/', pageRoutes);

app.listen(port, async () => {
    console.log(`${getDateTime()} - Server is running on http://localhost:${port}`);
    await initDb();
});