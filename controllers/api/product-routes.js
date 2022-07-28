const router = require('express').Router();
const sequelize = require('sequelize');
const { Product, Category } = require('../../models');



router.get('/', (req, res) => {

    Product.findAll({
    
        include: [
            {
            model: Category,
            attributes: ["id","category_id","category_name"]
            }
        ]
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});



// get one product by id
router.get("/:id", (req, res) => {

    Product.findOne({
        where: {
            id: req.params.id
        },
       
        include: [
            {
            model: Category,
            attributes: ["id", "category_name"]
            }
        ]
    })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

});



module.exports = router;