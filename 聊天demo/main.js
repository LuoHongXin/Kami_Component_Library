const express = require("express");
const port = 9528;
const app = express();
app.use(express.static("./"))
app.listen(port, () => {
    console.log(port + "server is runnning")
})