import User from "../models/userModel.js";

let users = [
  {
    id: 1,
    fullName: "Karl Culi",
    username: "karlculi",
    password: "password123"
  },
  {
    id: 2,
    fullName: "Maria Santos",
    username: "marias",
    password: "securePass456"
  },
  {
    id: 3,
    fullName: "John Dela Cruz",
    username: "johndc",
    password: "myPassword789"
  },
  {
    id: 4,
    fullName: "Ana Reyes",
    username: "anarey",
    password: "anaPass2025"
  },
  {
    id: 5,
    fullName: "Mark Lopez",
    username: "marklopez",
    password: "mark1234"
  }
];


// @desc  Gets all users
// @route GET api/users
export const getUsers = (req, res, next) => {
  return res.status(200).json(users);
};


// @desc  Gets specific user
// @route GET api/users/:username
export const getUser = async (req, res, next) => {
  const { username } = req.params;
  try {
    const findUser = await User.findOne({ username }).select('fullName username createdAt');

    if (!findUser) {
      const error = new Error(`User with username of ${username} was not found.`);
      error.status = 404;
      return next(error);
    }

    return res.status(200).json(findUser);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}


// @desc  Creates a user
// @route POST api/users/
export const createUser = async (req, res, next) => {
  const { fullName, username, password } = req.body;

  try {
    const existingUsername = await User.findOne({ username });

    if (existingUsername) {
      const error = new Error(`Username not available. Please try another one.`);
      error.status = 400;
      return next(error);
    }

    const newUser = await User.create({ fullName, username, password });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};


// @desc  Updates a user
// @route PUT api/users/:username
export const updateUser = async (req, res, next) => {
  const { username } = req.params;
  const { fullName, newUsername, password } = req.body;

  try {
    const findUser = await User.findOne({ username });  //finds if the user exists

    if (!findUser) {
      const error = new Error(`User with username of ${username} was not found.`);
      error.status = 404;
      return next(error);
    }

    if (newUsername && newUsername !== username) {
      const existingUsername = await User.findOne({ username: newUsername });

      if (existingUsername) {
        const error = new Error(`Username not available. Please try another one.`);
        error.status = 400;
        return next(error);
      }
      findUser.username = newUsername;
    }

    if (fullName) findUser.fullName = fullName;
    if (password) findUser.password = password;

    await findUser.save();

    return res.status(200).json(findUser);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


// @desc  Deletes a user
// @route DELETE api/users/:username
export const deleteUser = async (req, res, next) => {
  const { username } = req.params;
  try {
    const findUser = await User.findOne({ username });

    if (!findUser) {
      const error = new Error(`User with username of ${username} was not found.`);
      error.status = 404;
      return next(error);
    }
    await User.findOneAndDelete({ username });
    return res.status(200).json({ msg: `User "${username}" has been deleted.` });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};