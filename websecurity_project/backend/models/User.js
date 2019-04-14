const mongoose = require('mongoose');
const countriesJson = require('countries');
const userRoles = Object.freeze({
    admin: 'ADMIN',
    user: 'USER',
    scriptKiddie: 'scriptKiddie',
});

const countries = Object.freeze({ ...countriesJson.countries });

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
    username: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String
    },
    userRole: {
        type: String,
        enum: Object.values(userRoles)
    },
    activationKey: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        enum: Object.values(countries)
    },
    socialNetwork: {
        type: String
    },
    books: []
});

Object.assign(UserSchema.statics, userRoles);

/* TODO We implemented out own version
// hashing a password before saving it to the database
UserSchema.pre('save', () => {
    const user = this;
    console.log("user ", user);
    bcrypt.hash(user.password, 10, (err, hash) =>{
        if (err) {
            console.log(err);
        }
        user.password = hash;
    });
});

// authenticate input against database
UserSchema.statics.authenticate = (email, password, callback) => {
    User.findOne({ email: email })
        .exec((err, user) => {
            if (err) {
                return callback(err)
            } else if (!user) {
                const err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
};
*/


const User = mongoose.model('User', UserSchema);
module.exports = User;
