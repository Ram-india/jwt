const express = require('express');
const {registerUser,loginUser,getUserInfo} = require('../controllers/authController');
const authMiddleware  = require('../middleware/authMiddleware');
//const {validateUser } = require('../middleware/validationMiddleware');

const router = express.Router();

//register a new user (validation applied)
router.post("/register", registerUser);

//login a user (Email and password validation)
router.post("/login", loginUser);

//get user info
router.get("/user", authMiddleware, getUserInfo);

module.exports = router;