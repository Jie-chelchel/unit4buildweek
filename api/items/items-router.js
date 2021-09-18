const router = require("express").Router();
const Items = require("./items-model");

router.get("/", (req, res, next) => {
  Items.getAllItems()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => next(err));
});

router.post("/", (req, res, next) => {
  Items.addItem(req.body)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
