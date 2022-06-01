require("./db/connection")
const cors = require("cors");
const express = require("express");
const MovieRouter = require("./movie/MovieRoutes")
const UserRouter = require("./user/userRoutes");

const app = express();
const port = process .env.PORT || 5000

app.use(express.json());

app.use(cors());

app.use(UserRouter);

app.use(MovieRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});