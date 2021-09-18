const bcrypt = require("bcryptjs");
const router = require("express").Router();

const Users = require("../users/users-model.js");

router.post("/register", (req, res, next) => {
  let user = req.body;

  // bcrypting the password before saving
  const rounds = process.env.BCRYPT_ROUNDS || 8; // 2 ^ 8
  const hash = bcrypt.hashSync(user.password, rounds);

  // never save the plain text password in the db
  user.password = hash;

  Users.insertUser(user)
    .then((saved) => {
      res.status(201).json({ message: `Welcome, ${saved.user_email}` });
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

module.exports = router;
