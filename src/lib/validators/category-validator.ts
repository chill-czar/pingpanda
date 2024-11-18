import { z } from "zod"

export const CATEGORY_NAME_VALIDATOR = z
  .string()
  .min(1, "Category name is required")
  .regex(/^[a-zA-Z0-9 ]+$/, "Category name must be alphanumeric")
  .max(50, "Category name must be less than 50 characters")
