let express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller")
let {auth} = require("../middleware/auth")

router.post("/login",userController.loginUser);
router.get("/orders",auth,userController.getUserOrders)

module.exports = router