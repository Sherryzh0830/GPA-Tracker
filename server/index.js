const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");

const EventModel = require("./models/event");
const CourseModel = require("./models/course");

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

app.post("/createEvent", async (req, res) => {
  const courseName = req.body.courseName;
  const component = req.body.component;
  const weight = req.body.weight;
  const grade = req.body.grade;
  const event = new EventModel({
    courseName: courseName,
    component: component,
    weight: weight,
    grade: grade,
  });
  await event.save();
});

app.put("/updateEvent", async (req, res) => {
  const newComponent = req.body.newComponent;
  const id = req.body.id;
  try {
    await EventModel.findByIdAndUpdate(id, { component: newComponent });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/deleteEvent/:id", async (req, res) => {
  const id = req.params.id;
  await EventModel.findByIdAndRemove(id);
});

app.post("/createEvent", async (req, res) => {
  const courseName = req.body.courseName;
  const component = req.body.component;
  const weight = req.body.weight;
  const grade = req.body.grade;
  const event = new EventModel({
    component: component,
    weight: weight,
    grade: grade,
    courseName: courseName,
  });
  await event.save();
});

app.get("/getCourse", (req, res) => {
  CourseModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getEventbyCourseName", (req, res) => {
  const courseName = req.params.courseName;
  EventModel.find({courseName}, (err, result) => {
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
