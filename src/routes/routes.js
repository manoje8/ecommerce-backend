import { Router } from "express";
import Products from "../controller/product.controller.js";

const router = Router()

router.get("/", Products.getProducts)
router.get("/search", Products.searchProduct)
router.get("/:category", Products.categoryProducts)
router.post("/add", Products.addProducts)

export default router