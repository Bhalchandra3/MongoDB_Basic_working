# 🧠 MongoDB + Mongoose + Express CRUD API

This project demonstrates how to connect a **Node.js + Express** server to **MongoDB Atlas** using **Mongoose**, and perform full **CRUD (Create, Read, Update, Delete)** operations.

---

## 🚀 Features

- Connects MongoDB Atlas using Mongoose
- Simple Express server setup
- CRUD operations on user data
- Organized project structure
- Environment variable support via `.env`

---

## 📂 Folder Structure

```
project/
│
├── .env
├── index.js
├── package.json
├── .gitignore
├── readme.md
│
├── db/
│   └── index.js          # MongoDB connection setup
│
├── models/
│   └── user.model.js     # Mongoose schema/model
│
└── routes/
    └── user.routes.js    # CRUD API routes
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <repo-url>
cd MONGODB_PRACTICE
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

Add your MongoDB URI and server port inside a `.env` file:

```env
PORT=your_PORT
MONGODB_URI=your_MongoDB_URL
```

> ⚠️ make your port and MONGODB_URL

---

## 💻 Run the Server

```bash
npx nodemon index.js
```

or

```bash
npm run dev
```

You should see:

```
✅ MongoDB connected: cluster0.mongodb.net/practiceDB
🚀 Server running on port 8000
```

---

## 🧾 API Endpoints

| Method     | Endpoint         | Description             | Example Body                                                 |
| ---------- | ---------------- | ----------------------- | ------------------------------------------------------------ |
| **POST**   | `/api/users`     | Create a new user       | `{ "name": "Ankur", "email": "ankur@gmail.com", "age": 24 }` |
| **GET**    | `/api/users`     | Get all users           | —                                                            |
| **GET**    | `/api/users/:id` | Get a single user by ID | —                                                            |
| **PUT**    | `/api/users/:id` | Update user details     | `{ "name": "Updated Name" }`                                 |
| **DELETE** | `/api/users/:id` | Delete a user           | —                                                            |

---

## 🧠 Example Mongoose Schema

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
});
```

---

## 🧰 Tech Stack

- **Node.js** — JavaScript runtime
- **Express** — Web framework
- **MongoDB Atlas** — Cloud database
- **Mongoose** — MongoDB object modeling
- **dotenv** — Environment variable management
- **cors** — Handle cross-origin requests

---

## 🧩 Troubleshooting

### ❌ "MongoNetworkError" or "Failed to connect to server"

- Check that your **MongoDB Atlas IP whitelist** includes your current IP (`0.0.0.0/0` for testing).
- Ensure your **username** and **password** are correct.
- Make sure your `.env` file path is correct and loaded **before** using `mongoose.connect()`.

### ❌ "URI malformed" or "Invalid namespace"

- Ensure your `.env` connection string has a database name:
  ```
  mongodb+srv://<user>:<pass>@cluster.mongodb.net/myDatabase
  ```

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
