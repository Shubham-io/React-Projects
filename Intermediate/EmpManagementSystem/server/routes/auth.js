import express from "express";
import { login, verify } from "../controllers/authController.js";
import authMIddlware from "../middleware/authMIddlware.js";


const router = express.Router();

router.post("/login", login);
router.post("/verify", authMIddlware, verify);

export default router;
