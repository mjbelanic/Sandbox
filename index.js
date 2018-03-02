const express = require("express");
const path = require("path");

app = express();
app.use(express.static("public"));
const PORT = 3000;

require("./Routes/htmlRoutes.js")(app);

app.listen(PORT);
