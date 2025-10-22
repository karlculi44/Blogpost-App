import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


// export const protect = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ msg: 'No token provided, authorization denied.' });
//   }
//   const token = authHeader.split(' ')[1];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach decoded user info to request object
//     next();
//   } catch (error) {
//     return res.status(401).json({ msg: 'Token is not valid.' });
//   }
// };


// this is the same as above but gets token from cookies

export const protect = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: 'No token provided, authorization denied.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info to request object
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Token is not valid.' });
  }
};
