import { User } from "../model/user.js";
import { sendToken } from "../utils/jwtToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "sample_id",
        url: "sample_url",
      },
    });
    user.password = undefined;
    sendToken(user, 201, res, "User registered successfully");
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    user.password = undefined;

    sendToken(user, 200, res, "Login successful");
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};