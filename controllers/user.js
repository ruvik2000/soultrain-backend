import User from "../models/user.js";
import bcrypt from "bcryptjs";


export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const addUser = async (req, res) => {
    const { email, password, userName, artistName } = req.body;
    console.log("signup ", req.body)
    try {
        // check if the user already exists 
        const oldUser = await User.findOne({ email });
        if (oldUser) return res.status(400).json({ message: "User already exists" });
        // hashing the password using bcrypt for extra security
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ userName, artistName, email, password: hashedPassword });
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};

export const getUserByUsername = async (req, res) => {
    try {
        // finiding a specific record by a userName
        const user = await User.find({"userName" : req.params.username})
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteUserByUsername = async (req, res) => {
    try {
    const deletedUser = await User.deleteOne({ username: req.params.username });
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getUserByArtistName = async (req, res) => {
    try {
        const user = await User.find({"artistName" : req.params.artistName})
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteUserByArtistName = async (req, res) => {
    try {
    const deletedUser = await User.deleteOne({ username: req.params.artistName });
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}