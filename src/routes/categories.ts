import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/categories";
import { login } from "../middleware/login";

const router = Router()

router.get('/', login, getCategories)

router.get('/:id', getCategory)

router.post('/', createCategory)

router.put('/:id', updateCategory)

router.delete('/:id', deleteCategory)

export {router};