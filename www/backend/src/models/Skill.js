import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    isDeleted:{
        type: Boolean,
        required: false,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required: false
    }
});

export default mongoose.model('Skill', SkillSchema);