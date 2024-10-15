import express from 'express';
const router = express.Router();
import notaControllers from '../controllers/nota.controllers.js';
import authenticate from '../../config/jwt.config.js';


//CREATE
router.post("/", authenticate, notaControllers.create);
//FIND ALL
router.get("/", authenticate, notaControllers.findAll);
//FIND BY ID
router.get("/:id", authenticate, notaControllers.findById);
//UPDATE BY ID
router.put("/:id", authenticate, notaControllers.updateById);
//DELETE BY ID
router.delete("/:id", authenticate, notaControllers.deleteById);

export default router;