import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
// import {} from "dotenv/config";
import dotenv from "dotenv";
dotenv.config({ silent: true });

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    //declaring this variable to asing the user we are finding by email
    const existingUser = await User.findOne({ email });
    //checking if the user doesnt exist
    if (!existingUser) {
      return res.status(404).json({ message: "User not in DB" });
    }

    //checking if the passwords are matching
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    //if the passwords don't match then this message happens
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "invalid creds" });
    }

    //creating token
    const token = jwt.sign(
      //information being encrypted into the token aka payload
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET,
      { expiresIn: 3600000 }
    );
    //receiving the result
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
export const signup = async (req, res) => {
  const { email, password, confirmPassword, admin, fname, lname } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    //confirming if there is already an existing user in the DB
    if (existingUser) return res.status(404).json({ message: "User Exists" });

    //confirming if the password and confirmpassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password Do Not Match" });
    }

    //encrypting the password by using bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating the user
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${fname} ${lname}`,
    });

    //creating token
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET,
      { expiresIn: 3600000 }
      //   (error, token) => {
      //     if (error) {
      //       res.status(500).json({ message: "this is inside the token" });
      //     }
      //   }
    );

    //pushes the user to the DB
    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
