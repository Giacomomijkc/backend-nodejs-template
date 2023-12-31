const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const PORT = 5050;

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Server Connection Error!'));
db.once('open', () => {
    console.log('Database MongoDB connected!')
});


app.listen(PORT, () =>
    console.log(`Server avviato ed in ascolto sulla PORTA ${PORT}`)
);