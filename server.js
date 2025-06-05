const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];
let idCounter = 1;


app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>API is running</title>
        <style>
          body { display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; background: #f0f0f0; }
          h1 { color: red; font-size: 3rem; }
        </style>
      </head>
      <body>
        <h1>API is running</h1>
      </body>
    </html>
  `);
});


app.get("/tasks", (req, res) => {
  const { status } = req.query;

  if (status === "completed") {
    return res.json(tasks.filter(task => task.completed));
  } else if (status === "pending") {
    return res.json(tasks.filter(task => !task.completed));
  }

  res.json(tasks); // return all
});


app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "Task title must be a non-empty string." });
  }

  const newTask = { id: idCounter++, title: title.trim(), completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});


app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);

  if (tasks.length === initialLength) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json({ message: "Task deleted successfully." });
});


app.put("/tasks/:id/complete", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.completed = true;
  res.json(task);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
