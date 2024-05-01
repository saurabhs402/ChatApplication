const express=require("express")
const protectRoute =require("../Middleware/protectRoute")
const userController = require("../Controllers/userController")

const router = express.Router();

router.route("/").get(protectRoute, userController.getUsersForSidebar);

module.exports= router;