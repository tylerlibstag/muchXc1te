// Local Auth set up
// reference: https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const localUserSchema = new Schema({
    username: {
        type: String
    },
    // Email address of our user. email has to be unique. No two users can have the same email.
    email: {
        type: String,
        required: true,
        unique: true
    },
    email_is_verified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String
    },
    hashPassword: {
        type: String,
        // This is a custom function and creates a six-character hash of the email. 
        // I.e., a new referral code is created whenever somebody signs up.
        default: function () {
            let hash = 0;
            for (let i = 0; i < this.email.length; i++) {
                hash = this.email.charCodeAt(i) + ((hash << 5) - hash);
            }
            let res = (hash & 0x00ffffff).toString(16).toUpperCase();
            return "00000".substring(0, 6 - res.length) + res;
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const LocalUser = mongoose.model("localusers", localUserSchema);

export default LocalUser;