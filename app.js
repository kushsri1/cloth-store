const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

const listingRouter = require("./router/listing");


app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.set("views engine", "ejs");

app.get("/", (req, res)=> {
    res.send("hey im root");
})

app.use("/", listingRouter);

app.listen(8080, ()=> {
    console.log("app is listening to port 8080");
})