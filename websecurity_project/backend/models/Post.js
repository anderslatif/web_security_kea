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
        type: Object,
    },
    file: {
        type: Object,
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

const User = mongoose.model('Post', PostSchema);
module.exports = User;
