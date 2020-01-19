const express = require('express');
const cors = require('cors');
const path = require('path')
require('./mongoose');
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

const app = express();
const port = process.env.port || 5000;

const publicPath = path.join(__dirname, '.', 'front-end/build')

app.use(express.static(publicPath))

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(exercisesRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("front-end/build"))
}
// app.use(express.static(path.join(__dirname, "front-end", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});