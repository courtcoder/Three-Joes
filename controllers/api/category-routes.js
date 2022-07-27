const router = require("express").Router();
const sequelize = require("sequelize");
const { Category, Product } = require("../../models");

// get all categories
router.get("/", (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "prod_name", "prod_desc", "price"],
      },
    ],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one category
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
