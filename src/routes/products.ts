import express, { Request, Response } from 'express';
import {getAllProducts,getAllProductsTesting} from '../controllers/products'
const router = express.Router()

// const {getAllProducts,getAllProductsTesting} = require("../controllers/products")

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

export default router