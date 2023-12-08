import express from "express";
import { getUsers, addUser, getUserByUsername, deleteUserByUsername, getUserByArtistName, deleteUserByArtistName } from "../controllers/user.js";

const router = express.Router();

// initialze API routes 
router.get("/allUsers", getUsers);
router.post("/addUser", addUser);
router.get("/getByUsername/:username", getUserByUsername);
router.delete("/deleteByUsername/:username", deleteUserByUsername);
router.get("/getByArtistName/:artistName", getUserByArtistName);
router.delete("/deleteByArtistName/:artistName", deleteUserByArtistName);

export default router;