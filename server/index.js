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
  }).sort({courseName:1, _id:1});
});


app.put("/updateEvent", async (req, res) => {
  const newComponent = req.body.newComponent;
  const newWeight = req.body.newWeight;
  const newGrade = req.body.newGrade;
  const id = req.body.id;
  try {
    if(newComponent!=""){
      await EventModel.findByIdAndUpdate(id, { component: newComponent });
    }
    if(newWeight!=""){
      await EventModel.findByIdAndUpdate(id, { weight: newWeight });
    }
    if(newGrade!=""){
      await EventModel.findByIdAndUpdate(id, { grade: newGrade });
    }
  } catch (err) {
    console.log(err);
  }
});

app.put("/updateCourse", async (req, res) => {
  const newQuarter = req.body.newQuarter;
  const newCoursename = req.body.newCoursename;
  const id = req.body.id;
  try {
    if(newQuarter!=""){
      await CourseModel.findByIdAndUpdate(id, { quarter: newQuarter });
    }
    if(newCoursename!=""){
      await CourseModel.findByIdAndUpdate(id, { courseName: newCoursename });
    }
  } catch (err) {
    console.log(err);
  }
});

app.delete("/deleteEvent/:id", async (req, res) => {
  const id = req.params.id;
  await EventModel.findByIdAndRemove(id);
});
app.delete("/deleteCourse/:id", async (req, res) => {
  const id = req.params.id;
  await CourseModel.findByIdAndRemove(id);
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
  }).sort({quarter:1});
});


app.get("/findCourse/:courseName", (req,res)=>{
  const courseName = req.params.courseName;
  console.log("params:", courseName);
  EventModel.find({courseName: courseName}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/findQuarter/:quarter", (req,res)=>{
  const quarter = req.params.quarter;
  console.log("params:", quarter);
  CourseModel.find({quarter: quarter}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.post("/createCourse", async (req, res) => {
  const courseName = req.body.courseName;
  const quarter = req.body.quarter;
  const course = new CourseModel({
    quarter: quarter,
    courseName: courseName,
  });
  await course.save();
});



app.listen(3001, () => {
  console.log("connected to servers successfully");
});
