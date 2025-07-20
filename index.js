const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/collect", (req, res) => {
    console.log("Neue Daten empfangen:", req.body);
    res.send("Daten erhalten!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server läuft auf Port", port);
});
