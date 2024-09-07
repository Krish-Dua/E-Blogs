const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    blogImage: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true

    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })



const Blog = model('Blog', blogSchema);
module.exports = Blog;                                                        
