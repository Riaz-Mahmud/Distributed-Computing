import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

//router.get('/shopping-cart', CartController.shoppingCart);

async function shoppingCart(req, res, next) {
    try {
        const carts = await Cart.find().populate('product_id'); // Populate the 'product_id' field to get product details

        const cartItems = carts.map(cart => {
            return {
                _id: cart._id,
                quantity: cart.quantity,
                product: {
                    _id: cart.product_id._id,
                    title: cart.product_id.title,
                    description: cart.product_id.description,
                    price: cart.product_id.price,
                },
            };
        });

        return res.status(200).json({
            status: 200,
            data: cartItems,
            total: 100,
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: e.message || 'Internal Server Error',
        });
    }
} 

// router.post('/add-to-cart', CartController.addToCart);
async function addToCart(req, res, next) {
    try {

        // Check if the product exists
        const productIsAvailable = await Cart.findOne({ product_id: req.body.productId });
        if (productIsAvailable) {
            // update the cart quantity
            productIsAvailable.quantity += 1;
            await productIsAvailable.save();
            
        }else{
            const cart = new Cart();
            // Get the product ID and session ID from the request body
            cart.product_id = req.body.productId;
            // crate UUId 
            cart.session_id = req.sessionID;
            await cart.save();
        }

        return res.status(201).json({
            status: 201
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: e
        });
    }
}

async function remove(req, res, next) {
    try {
        const cart = await Cart.findById(req.body.id);
        if (!cart) {
            return res.status(404).json({
                message: 'Cart not found',
            });
        }

        // deleteone
        const deleted = await cart.deleteOne( { _id: req.body.id } );
        if (!deleted) {
            return res.status(500).json({
                message: 'Could not delete cart',
            });
        }

        return res.status(204).json({
            status: 204
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: e.message || 'Internal Server Error',
        });
    }
}

export default { 
    shoppingCart: shoppingCart, 
    addToCart: addToCart,
    remove: remove
};