const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send({ message: "Hello from home page" }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening at localhost:${port}`));
