import { ZodError } from "zod";
import { productQuerySchema } from "../validations/productValidation.js";

export const validateProductQuery = (req, res, next) => {
  try {
    const validatedQuery = productQuerySchema.parse(req.query);
    req.validatedQuery = validatedQuery;
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({
        success: false,
        errors: err.issues.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      });
    }
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
