const express = require ('express');

const app = express();

app.get("/", (req, res) => {
    res.send("hello World")
});

app.listen(3000,() => {
    console.log("server is on port 3000");
});

