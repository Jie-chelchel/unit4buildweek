const db = require("../../data/db-config");

async function insertUser(user) {
  const [newUserObject] = await db("users").insert(user, [
    "user_email",
    "password",
  ]);
  return newUserObject;
}

function getAllUsers() {
  return db("users").select("user_id", "user_email", "role_id");
}

module.exports = {
  insertUser,
  getAllUsers,
};
