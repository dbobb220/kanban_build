const User = require("../models/UserModel");
const tokenForUser = require("../token").tokenForUser;
const compare = require("../hash").compare;

exports.login = login = (req, res) => {
  const { username, password } = req.body;
  console.log("Looking for a user with the username", username);
  User.findOne({ username })
    .exec()
    .then(user => {
      // If there is no user found call done with a `null` argument, signifying no error
      // and `false` signifying that the signin failed
      if (!user) {
        console.log("No user found with this username", username);
        return res.status(401).send({ error: "Invalid Login" });
      }
      compare(password, user.password, function(err, isMatch) {
        // If there is an error call done with our error
        if (err) {
          return res.status(500).send({ error: "Error Occured" });
        }
        // If the passwords do not match call done with a `null` argument, signifying no error
        // and `false` signifying that the signin failed
        if (!isMatch) {
          return res.status(401).send({ error: "Invalid Login" });
        }
        console.log(
          "The username was found and the passwords matched",
          username
        );
        // If we have no errors and the passwords match
        // call done with a `null` argument, signifying no error
        // and with the now signed in user
        const token = tokenForUser(user);
        res.json({ token });
      });
    })
    .catch(() => {
      return res.status(500).send({ error: "Something failed!" });
    });
};
