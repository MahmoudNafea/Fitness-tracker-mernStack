const express = require('express');
const cors = require('cors');
const path = require('path')
require('./mongoose');
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

const app = express();
const port = process.env.port || 5000;

// const publicPath = path.join(__dirname, '..', './front-end/public')

// app.use(express.static(publicPath))
app.use(express.static("./client/build"))

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(exercisesRouter);


// app.use(express.static(path.join(__dirname, "front-end", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});