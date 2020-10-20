// We check for the existence of the provided email of the user and proceed as follows:
// If we can’t find a user, a new user is created with the encrypted password.
// If a user is found, the encrypted provided password is compared 
// against the encrypted password in the database
import bcrypt from "bcryptjs";
import LocalUser from "../models/localUserModel.js";
import passport from "passport";
import LocalStrategy from "passport-local";


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});

// Local Strategy
passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        // Match User
        LocalUser.findOne({ email: email })
            .then(user => {
                // Create new User
                if (!user) {
                    const newUser = new LocalUser({ email, password });
                    // Hash password before saving in database
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    return done(null, user);
                                })
                                .catch(err => {
                                    return done(null, false, { message: err });
                                });
                        });
                    });
                    // Return other user
                } else {
                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: "Wrong password" });
                        }
                    });
                }
            })
            .catch(err => {
                return done(null, false, { message: err });
            });
    })
);

export default passport;