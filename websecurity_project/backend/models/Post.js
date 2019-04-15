const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    id: {

    },
    title: {
        type: String,
        trim: true
    },
    author: {
        type: String,
        trim: true
    },
    cover: {
        // JS Object
        type: Schema.Types.Mixed,
    },
    file: {
        type: Schema.Types.Mixed,
    },
    // FIXME TODO Danger ahead
    description: {
        type: String
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    bookOwner: {
        type: String,
        trim: true
    },
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
