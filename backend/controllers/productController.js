import Product from "../model/product.js";

export const getAllProducts = async (req, res) => {
  try {
    const { keyword, category, minPrice, maxPrice, rating, page = 1, limit=10 } =
      req.query;

    const query = {};

    if (keyword) {
      query.$or = [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ];
    }

    if (category) {
      query.category = category;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }

    if (rating) {
      query.rating = { $gte: rating };
    }
    console.log("page", page);
    console.log("limit", limit);
    
    const skip = limit * (page - 1);

    const products = await Product.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const totalProducts = await Product.countDocuments(query);

    if (!products || products.length === 0) {
      return res.status(404).json({
        success: false,
        error: "No products found",
      });
    }

    res.status(200).json({
      success: true,
      page,
      totalProducts,
      totalPages: Math.ceil(totalProducts / limit),
      limit,
      count: products.length,
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      description: err.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({
        success: false,
        description: "Product not found",
      });
    const deletedProduct = await Product.findOneAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      description: "product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      description: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
