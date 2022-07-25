const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  Title: { type: String, require: true },
  Note: { type: String, require: true },
  Label: { type: String, require: true },
  userId:{ type: String, require: true}
});

const TaskModel = mongoose.model("task", taskSchema);

module.exports = TaskModel;
