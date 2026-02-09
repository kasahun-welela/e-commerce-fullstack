import jwt from "jsonwebtoken";
import { User } from "../model/user.js";

const isAuthenticated = async (req, res, next) => {
  const cookieToken = req.cookies && req.cookies.token;
  const authHeader = req.headers.authorization;
  const headerToken = authHeader && authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  const token = cookieToken || headerToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please login to access this resource",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Please login to access this resource",
    });
  }
};

export default isAuthenticated;

