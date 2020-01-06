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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("../front-end/build"))
}

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});