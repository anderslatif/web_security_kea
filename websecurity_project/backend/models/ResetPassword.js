const mongoose = require('mongoose');

const ResetPasswordSchema = new mongoose.Schema({
    id: {
        type: String,
        default: new mongoose.Types.ObjectId
    },
    email: {
        type: String,
        unique: true,
        trim: true
    }
});

const ResetPassword = mongoose.model('ResetPassword', ResetPasswordSchema);
module.exports = ResetPassword;
