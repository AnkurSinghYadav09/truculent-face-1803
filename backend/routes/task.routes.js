const { Router } = require("express");
const TaskModel = require("../models/Task");

const taskRouter = Router();
//get
taskRouter.get("/:userId/tasks", async (req, res) => {
  const userId = req.params.userId;
  //   console.log(userId);
  const tasks = await TaskModel.find({ userId });
  res.send(tasks);
});

//post
taskRouter.post("/:userId/task", async (req, res) => {
  const userId = req.params.userId;
  let payload = {
    ...req.body,
    userId,
  };

  const task = await new TaskModel(payload);
  task.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "error occured" });
    }
    return res.status(201).send(success);
  });
});

//delete

taskRouter.delete("/:userId/del/:_id", async (req, res) => {
  const taskid = req.params._id;

  const tasks = await TaskModel.deleteOne({ _id: taskid });
  res.send(tasks);
});

//update

taskRouter.put("/:userId/update/:_id", async (req, res) => {
  const taskid = req.params._id;
  // console.log()

  const tasks = await TaskModel.updateOne(
    { _id: taskid },
     { $set: req.body });
  res.send(tasks);
});

module.exports = taskRouter;
