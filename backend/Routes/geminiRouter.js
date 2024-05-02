const express = require("express")

const geminiController = require('../Controllers/geminiController')

const router = express.Router();




router.route("/").get(geminiController.generateResponse);



module.exports = router;