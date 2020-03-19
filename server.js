const express = require('express');
const cors = require('cors');
const path = require('path')
require('./mongoose');
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

const app = express();
const port = process.env.port || 5000;


app.use(express.static(path.join("build")))

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(exercisesRouter);

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});