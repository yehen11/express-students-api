import express from 'express';

import * as studentController from '../controllers/studentController.js';

const router = express.Router();

router.get("/", studentController.getAll);
router.get("/:id", studentController.getOne);
router.post("/", studentController.create);
router.put("/:id", studentController.update);
router.delete("/:id", studentController.remove);

export default router;