export const sendToken = (user, statusCode, res, message) => {
  const token = user.generatejwtToken();

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
    ),
  };

  user.password = undefined;

  res.status(statusCode).cookie("token", token, cookieOptions).json({
    success: true,
    description: message,
    user,
    token,
  });
};
