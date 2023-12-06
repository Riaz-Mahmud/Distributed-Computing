import Product from '../models/Product.js'
import path from 'path';

async function index(req, res, next){
    try{
        // get all products from database order by id desc
        const products = await Product.find().sort({ createdAt: 'desc' });
        return res.status(200).json({
            status: 200,
            message: "Products retrieved successfully",
            data: products
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

async function save(req, res, next){
    try {
        const product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.price = req.body.price;
        
        if (req.file) {
            product.image = 'storage/products/' + req.file.filename;
        }
        await product.save();

        return res.status(201).json({
            status: 201,
            message: "Product created successfully",
            data: req.body
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

export default {
    index:index,
    save:save
};