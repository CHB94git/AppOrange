require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("uploads"));

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err) => console.error(err));

app.use("/api", require("./routes/routes"));

const port = process.env.PORT;

app.listen(port, () => console.log(`Running server in http://localhost:${port}`));

