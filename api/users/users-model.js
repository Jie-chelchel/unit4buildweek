const db = require("../../data/db-config");

async function insertUser(user) {
  const [newUserObject] = await db("users").insert(user, [
    "user_email",
    "password",
    "role_name",
  ]);
  return newUserObject;
}

function getAllUsers() {
  return db("users").select("user_id", "user_email", "role_name");
}

module.exports = {
  insertUser,
  getAllUsers,
};
