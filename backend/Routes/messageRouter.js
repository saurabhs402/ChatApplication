const express= require("express")
const { getMessages, sendMessage } =require("../Controllers/messageController")
const protectRoute =require("../Middleware/protectRoute")


const router = express.Router();

router.route('/:id').get( protectRoute, getMessages); //user to chat with id
router.route("/send/:id").post(protectRoute, sendMessage); // receiver id

module.exports= router;