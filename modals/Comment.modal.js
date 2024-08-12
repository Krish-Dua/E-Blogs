const { Schema, model } = require('mongoose');
const commentschema = new Schema({
    comment: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    toBlog:{
           type: Schema.Types.ObjectId,
        ref: "Blog"
    }
}, { timestamps: true })



const Comment = model('Comment', commentschema);
module.exports = Comment;                                                        