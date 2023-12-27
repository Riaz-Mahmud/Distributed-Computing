import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    techstack:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: false,
    },
    image:{
        type: String,
        required: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required: false
    },
    isDeleted:{
        type: Boolean,
        required: false,
        default: 0
    }
});

export default mongoose.model('Project', ProjectSchema);