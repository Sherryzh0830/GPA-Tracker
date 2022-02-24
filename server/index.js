const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const EventModel = require("./models/event");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://MyAdmin:0830@cluster0.q9ydu.mongodb.net/GPATracker?retryWrites=true&w=majority"
);

app.get("/getEvent", (req, res) => {
  EventModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3001, () => {
  console.log("connected to servers successfully");
});