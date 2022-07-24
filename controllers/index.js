const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const userRoutes = require("./api/user-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/user", userRoutes);


router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
