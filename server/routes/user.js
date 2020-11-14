const express = require("express");
const authController = require("./../controllers/authentication");

const router = express.Router();

router.post("/register", authController.signup);
router.post("/login", authController.login);
// router.post("/forgotPassword", authController.forgotPassword);
// router.patch("/resetPassword/:token", authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

module.exports = router;
