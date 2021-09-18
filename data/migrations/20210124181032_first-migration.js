exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments("role_id");

      tbl.string("role_name", 128).notNullable();
    })
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("user_email", 128).notNullable().unique();
      tbl.string("password", 256).notNullable();
      tbl
        .integer("role_id")
        .unsigned()
        .references("roles.role_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .defaultTo(2);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};
