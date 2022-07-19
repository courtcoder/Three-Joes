const router = require("express").Router();

const userRoutes = require("./user-routes");
//const categoryRoutes = require("./category-routes");
//const productRoutes = require("./product-routes");

router.use("/users", userRoutes);
//router.use("/category", categoryRoutes);
//router.use("/product", productRoutes);

module.exports = router;
