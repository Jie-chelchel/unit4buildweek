exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("user_email", 128).notNullable();
      tbl.string("password", 256).notNullable();
      tbl.string("role_name", 256).notNullable();
    })
    .createTable("items", (tbl) => {
      tbl.increments("item_id");
      tbl.string("location_city", 128).notNullable();
      tbl.string("location_street", 128).notNullable();
      tbl.string("location_zip", 128).notNullable();
      tbl.string("item_name", 256).notNullable();
      tbl.string("description").notNullable();
      tbl.decimal("price", 6, 2).notNullable();
      tbl.string("unit").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};
