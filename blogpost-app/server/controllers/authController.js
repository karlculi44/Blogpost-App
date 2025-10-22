import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import generateToken from "../utils/generateJWT.js";

// login a user
// POST @/api/auth/login`
export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    // Include password explicitly
    const user = await User.findOne({ username }).select('+password');

    if (!user) return res.status(404).json({ msg: 'User not found.' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' });

    const token = generateToken(user);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    return res.status(200).json({
      msg: 'Login successful',
      user: {
        id: user._id,
        fullName: user.fullName,
        username: user.username,
      },
      token
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Server error:' + error.message });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie('token', { sameSite: 'strict', httpOnly: true });
  return res.status(200).json({ msg: 'Logout successful' });
};


// signup a user
// POST @/api/auth/signup
export const signUpUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) return res.status(400).json({ msg: "Username or email already exists." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

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

// get current logged in user
// GET @/api/auth/profile
export const getProfile = (req, res) => {
  res.json({ msg: `Welcome ${req.user.username}, this is your profile.`, user: req.user });
};