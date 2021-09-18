const router = require("express").Router();
const Items = require("./items-model");

router.get("/", (req, res, next) => {
  Items.getAllItems()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => next(err));
});

module.exports = router;
