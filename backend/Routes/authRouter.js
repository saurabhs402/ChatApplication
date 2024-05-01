const express = require('express')


const authController = require('../Controllers/authController')

const router = express.Router();




router.route("/login").post(authController.login);

router.route("/signup").post( authController.signup);

router.route("/logout").post( authController.logout);

module.exports= router;