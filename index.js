const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile("views/test.html", { root: __dirname });
});

app.post("/form", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// *** To do ***
