const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile("views/test.html", { root: __dirname });
});

app.post("/test", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

app.get("/download", (req, res) => {
    res.download("rhys-jenkins-cv.pdf");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// *** To do ***
