import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    text: { type: String, required: true},
    status: { type: Number, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

mongoose.model('Todo', TodoSchema);