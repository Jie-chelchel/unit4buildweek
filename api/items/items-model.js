const db = require("../../data/db-config");

function getAllItems() {
  return db("items");
}

function findById(id) {
  return db("items").where({ item_id: id }).first();
}

async function addItem(item) {
  const [newItem] = await db("items").insert(item, [
    "location",
    "item_name",
    "description",
    "price",
    "unit",
    "item_id",
  ]);

  return newItem;
}

function removeItem(id) {
  return db("items").where({ item_id: id }).del();
}

function update(id, changes) {
  return db("items")
    .where({ item_id: id })
    .update(changes, [
      "location",
      "item_name",
      "description",
      "price",
      "unit",
      "item_id",
    ]);
}

module.exports = {
  getAllItems,
  addItem,
  findById,
  removeItem,
  update,
};
