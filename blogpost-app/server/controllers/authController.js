import User from "../models/userModel.js";

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