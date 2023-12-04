import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId, // Change the type to ObjectId
        ref: 'Product', // Reference to the Product model
        required: true
    },
    session_id: {
        type: String,
        required: false
    },
    quantity: {
        type: Number, // Change the type to Number for quantity
        required: false,
        default: 1
    }
});

export default mongoose.model('Cart', CartSchema);
