const mongoose = require("mongoose");
const EventSchema = new mongoose.Schema({
  component: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
});
const EventModel = mongoose.model("event", EventSchema);
module.exports = EventModel;
