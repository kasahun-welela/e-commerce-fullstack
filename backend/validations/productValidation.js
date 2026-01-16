import { z } from "zod";

export const productQuerySchema = z.object({
  keyword: z.string().min(1).optional(),

  category: z.string().min(1).optional(),

  minPrice: z.coerce.number().min(0).optional(),

  maxPrice: z.coerce.number().min(0).optional(),

  rating: z.coerce.number().min(0).max(5).optional(),

  page: z.coerce.number().int().min(1).default(1),

  limit: z.coerce.number().int().min(1).max(100).default(10),
});
