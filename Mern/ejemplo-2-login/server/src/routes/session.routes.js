import express from 'express';
const router = express.Router();
import sessionControllers from '../controllers/session.controllers.js';
import authenticate from '../../config/jwt.config.js';



//LOGIN
router.post("/", sessionControllers.login);
//LOGOUT
router.delete("/", sessionControllers.logout);
//SESSION
router.get("/", authenticate, sessionControllers.session);

export default router;