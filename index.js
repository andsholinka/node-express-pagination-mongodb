const express = require("express");
const cors = require("cors");
const logger = require('morgan');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const db = require("./src/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to respecker application."
    });
});

//default error
app.use((err, req, res, next) => {
    res.send(err.message)
})


require("./src/routes/turorial.routes")(app);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});