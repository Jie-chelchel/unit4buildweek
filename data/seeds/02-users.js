exports.seed = async function (knex) {
  await knex("users").del();
  await knex("roles").del();
  await knex("roles").insert([
    { role_name: "admin" },
    { role_name: "customer" },
  ]);
  await knex("users").insert([
    {
      user_email: "abc@gmail.com",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_id: 1,
    },
    {
      user_email: "xyz@gmail.com",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_id: 2,
    },
  ]);
};
