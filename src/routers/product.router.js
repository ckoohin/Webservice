import { Router } from "express";
import { createOne, deleteOne, getAllProduct, getOne, updateOne } from "../controllers/product.controller";
import { validateRequest } from "../middlewares/validateRequest";
import schema from "../validations/product.validation";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getOne);
productRouter.post("/", validateRequest(schema), createOne);
productRouter.put("/:id", validateRequest(schema), updateOne);
productRouter.delete("/:id", deleteOne);

export default productRouter;