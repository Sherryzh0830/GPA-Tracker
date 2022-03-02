const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseNumber: {
    type: String,
    required: true,
  }
});
const CourseModel = mongoose.model("course", CourseSchema);
module.exports = CourseModel;
