import User from "../models/userModel.js";


// login a user
export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    // Include password explicitly
    const user = await User.findOne({ username }).select('+password');

    if (!user) return res.status(404).json({ msg: 'User not found.' });
    if (password !== user.password) return res.status(400).json({ msg: 'Incorrect password' });


    return res.status(200).json({
      msg: 'Login successful',
      user: {
        id: user._id,
        fullName: user.fullName,
        username: user.username,
      }
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Server error:' + error.message });
  }
};


// signup a user
export const signUpUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ msg: "Username is already taken." });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ msg: "Email is already taken." });
    }

    const newUser = await User.create(req.body);

    return res.status(201).json({
      msg: "User created successfully.",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        suffix: newUser.suffix,
        birthdate: newUser.birthdate,
      },
    });

  } catch (error) {
    return res.status(500).json({ msg: "Server error: " + error.message });
  }
};
