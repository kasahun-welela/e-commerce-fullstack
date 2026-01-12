export const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "List of produts",
  });
};
