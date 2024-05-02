const express=require("express")
const protectRoute =require("../Middleware/protectRoute")
const userController = require("../Controllers/userController")

const router = express.Router();

router.route("/").get(protectRoute, userController.getUsersForSidebar);
router.route("/:id").patch(protectRoute,userController.updateStatus)
router.route("/:id").get(protectRoute, userController.getUser)

module.exports= router;