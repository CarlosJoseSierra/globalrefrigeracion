import { Router } from "express";
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
  getProductsVenta,
} from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);

router.get("/products/venta", getProductsVenta);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;
