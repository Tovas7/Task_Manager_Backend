const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

// POST add new task
router.post("/", async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const task = new Task({ title });
  await task.save();
  res.status(201).json(task);
});

// DELETE a task
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  res.json({ message: "Task deleted" });
});

// PUT mark as completed
router.put("/:id/complete", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.completed = true;
  await task.save();
  res.json(task);
});

module.exports = router;
