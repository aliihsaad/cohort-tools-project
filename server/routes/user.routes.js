import express from "express"
import isAuth from "../middlewares/isAuth.middleware.js"
import {
  getUser,
   createUser,
   login,
   userVerified
} from "../controllers/auth.controllers.js"
/* import bcrypt from "bycryptjs"
import jwt from "jsonwebtoken" */


const router = express.Router();

router.get("/", getUser);
router.post("/register", createUser);
router.post("/login", login);
router.get("/userVerified", isAuth, userVerified);

export default router;