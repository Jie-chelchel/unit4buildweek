exports.seed = async function (knex) {
  await knex("users").del();
  await knex("items").del();

  await knex("users").insert([
    {
      user_email: "abc@gmail.com",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_name: "owner",
    },
    {
      user_email: "xyz@gmail.com",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_name: "customer",
    },
  ]);
  await knex("items").insert([
    {
      location_city: "Cape Town",
      location_street: "Sunset St",
      location_zip: "7134",
      item_name: "Black beans",
      description: "New crop black beans, medium size.",
      price: "2.99",
      unit: "lb",
    },
    {
      location_city: "Durban",
      location_street: "Waterfall St",
      location_zip: "7123",
      item_name: "Lemons",
      description: "Small size.",
      price: "1.99",
      unit: "lb",
    },
  ]);
};
