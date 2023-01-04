const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "hbs");
app.use("/static", express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/users", (req, res) => {
    
    
    const users = JSON.parse(fs.readFileSync("users.json"));
    res.render("users.hbs", {
        users
    })
})
app.listen(3000)