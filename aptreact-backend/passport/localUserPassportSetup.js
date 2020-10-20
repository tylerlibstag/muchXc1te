// We check for the existence of the provided email of the user and proceed as follows:
// If we can’t find a user, a new user is created with the encrypted password.
// If a user is found, the encrypted provided password is compared 
// against the encrypted password in the database
import bcrypt from "bcryptjs";
import LocalUser from "../models/localUserModel.js";
import passport from "passport";
import LocalStrategy from "passport-local";



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
                                    console.log("Passport did not find a user with a matching email so a new user added to DB!")
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
                            console.log("a returning user is logging in")
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

passport.serializeUser((user, done) => {
    done(null, user.id);
});

// trying to store user's name in DB
passport.deserializeUser((id, done) => {
    LocalUser.findById(id, (err, user) => {
        user.id.user_name = user_name
       return  done(err, user);
    })
});

export default passport;

// passport.deserializeUser(function(id, done) {
//     getUser(id).then(function(user) {
//         user.whatever = 'you like';
//         return done(null, user);
//     });
// });