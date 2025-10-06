import express from "express";
import { User } from "./users.model.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Read by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user ? res.json(user) : res.status(404).json({ message: "User not found" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
