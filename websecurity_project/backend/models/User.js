const mongoose = require('mongoose');
const countriesJson = require('./countries');
const userRoles = Object.freeze({
    admin: 'ADMIN',
    user: 'USER',
    scriptKiddie: 'SCRIPTKIDDIE',
});

const countries = Object.freeze({ ...countriesJson.countries });

Object.assign(UserSchema.statics, userRoles);

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        default: new mongoose.Types.ObjectId
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: String,
    userRole: {
        type: String,
        enum: Object.values(userRoles)
    },
    activationKey: {
        type: String,
        trim: true
    },
    country: {
        type: Object,
        enum: Object.values(countries)
    },
    socialNetwork: String,
    books: []
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
