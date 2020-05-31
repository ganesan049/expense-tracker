const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.enable("trust proxy");

app.use(morgan("common"));

app.use(express.json());

require("dotenv").config();
// console.log(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB connected");
});

const transactions = require("./routes/transaction");
app.use("/api/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// # port (as described above) and host are both wrong

// # use alternate localhost and the port Heroku assigns to $PORT
const host = "0.0.0.0";
const port = process.env.PORT || 3000;
// Then you can start the server, as usual:

app.listen(port, host, function () {
  console.log(`Server started.......${port}`);
});
