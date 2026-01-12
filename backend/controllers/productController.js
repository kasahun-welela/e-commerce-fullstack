import Product from "../model/product.js";
export const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "List of produts",
  });
};
export const createProduct= async(req,res)=>{
  const product =await Product.create(req.body)

  res.status(201).json({
    success:true,
    product
  })
}