import express from "express";
import productsController from "../controllers/Products.Controller.js"
import CartController from "../controllers/CartController.js"
const router = express.Router();

//////////////// Products Routes start ////////////////
router.get('/',  productsController.index);
router.post('/',  productsController.save);
//////////////// Products Routes end ////////////////

//////////////// Cart Routes start ////////////////
router.get('/shopping-cart', CartController.shoppingCart);
router.post('/add-to-cart', CartController.addToCart);
router.post('/remove-add-cart', CartController.remove);
//////////////// Cart Routes end ////////////////

export default router;