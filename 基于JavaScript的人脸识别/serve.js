const express = require("express");
// const fs = require("fs");
const app = express();
app.use(express.static("./"));
app.listen(1949, () => {
    console.log("1949 serve is runnning")
})