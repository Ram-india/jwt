const express = require('express');
const {registerUser,loginUser,getUserInfo} = require('../controllers/authController');
const authMiddleware  = require('../middleware/authMiddleware');

const router = express.Router();

//register a new user
router.post("/register", registerUser);
//login a user
router.post("/login", loginUser);
//get user info
router.get("/user", authMiddleware, getUserInfo);

module.exports = router;