import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false,
        default: null
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required: false
    }
});

export default mongoose.model('Product', ProductSchema);