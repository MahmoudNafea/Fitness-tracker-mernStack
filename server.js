const express = require('express');
const cors = require('cors');
require('./mongoose');
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(exercisesRouter);

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});