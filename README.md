📝 Simple Task Manager API
The Simple Task Manager API is a lightweight backend application built with Node.js and Express. It enables users to manage tasks efficiently through a RESTful interface. This project is perfect for learning and testing basic API concepts without the complexity of a database.

🚀 Features
✅ Create new tasks with validation

📋 Retrieve all tasks

🔍 Filter tasks by completion status (completed or pending)

✔️ Mark tasks as completed

🗑️ Delete tasks by ID

🌐 Root URL returns a styled HTML message confirming the API is running

💾 In-memory storage using a simple JavaScript array

📦 Technologies Used
Node.js

Express.js

JavaScript (ES6)

📂 Project Structure
pgsql
Copy
Edit
simple-task-manager-api/
├── index.js

├── routes/

│   └── tasks.js

├── utils/

│   └── validateTask.js

├── package.json

└── README.md


📥 Installation
Clone the repository
  git clone https://github.com/Tovas7/Task_Manager_Backend.git
  cd Task_Manager_Backend
Install dependencies
  npm install
Run the server
   npm start
🛠 API Endpoints
🌐 Root
GET /

Returns a styled HTML message indicating the API is running.

📄 Tasks
GET /tasks

Retrieve all tasks.

Query parameter: completed=true|false to filter.

POST /tasks

Create a new task.

Body:

json
Copy
Edit
{
  "title": "Your task title",
  "description": "Optional description"
}
PATCH /tasks/:id/complete

Mark a task as completed.

DELETE /tasks/:id

Delete a task by its ID.

⚠️ Notes
This API uses temporary in-memory storage and does not persist data between server restarts.

Designed for educational and testing purposes only.

📃 Example Task Object
json
Copy
Edit
{
  "id": "abc123",
  "title": "Finish documentation",
  "description": "Complete the README file for the API",
  "completed": false,
  "createdAt": "2025-06-05T12:00:00.000Z"
}
📌 Future Improvements
Add persistent storage with a database (e.g., MongoDB)

Add user authentication

Implement pagination and sorting

Add unit tests

👨‍💻 Author
Muluken Zewdu
Full Stack Developer | GitHub Profile

📄 License
This project is licensed under the MIT License.
