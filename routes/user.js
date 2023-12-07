import express from "express";
import { getUsers, addUser, getUserByUsername, deleteUserByUsername, getUserByArtistName, deleteUserByArtistName } from "../controllers/user.js";

const router = express.Router();

// initialze API routes 
router.get("/allUsers", getUsers);
router.post("/addUser", addUser);
router.get("/:username", getUserByUsername);
router.delete("/:username", deleteUserByUsername);
router.get("/:artistName", getUserByArtistName);
router.delete("/:artistName", deleteUserByArtistName);

export default router;