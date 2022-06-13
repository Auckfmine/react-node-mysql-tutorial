const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const port = process.env.PORT | 3000;
const hostName = process.env.HOST_NAME;
const { sequelize, connectToDb } = require("./database");
const TodoRouter = require("./routes/todoRoute");
app.use(cors());
app.use(bodyParser({ extended: true }));
//connection to database here
connectToDb(sequelize);

// handle requests here GET/POST/PUT/PATCH/DELETE
app.use("/todo", TodoRouter);
app.get("/", function (req, res, next) {
  //console.log(req);

  res.send("hello world");
});

app.listen(port, function () {
  console.log(`server is listening on ${hostName}:${port}`);
});
