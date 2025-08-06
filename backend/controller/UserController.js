import User from "../models/UserModel.js";
// semua data user
export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  }
  catch (error) {
    console.log(error, message);
  }
};
// data user berdasarkan id
export const getUsersById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(response);
  }
  catch (error) {
    console.log(error, message);
  }
};
// membuat user
export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ message: "User created successfully" });
  }
  catch (error) {
    console.log(error, message);
  }
};

// update user
export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: "User updated successfully" });
  }
  catch (error) {
    console.log(error, message);
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: "User deleted successfully" });
  }
  catch (error) {
    console.log(error, message);
  }
};