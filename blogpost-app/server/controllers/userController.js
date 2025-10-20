import User from "../models/userModel.js";

// @desc  Gets all users
// @route GET api/users
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error.message);
  }
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