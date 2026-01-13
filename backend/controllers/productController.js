import Product from "../model/product.js";
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  if (!products || products.length === 0)
    return res.status(404).json({
      success: false,
      description: "No products found",
    });
  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};
export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

export const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).json({
      success: false,
      description: "Product not found",
    });

  res.status(200).json({
    success: true,
    product,
  });
};

