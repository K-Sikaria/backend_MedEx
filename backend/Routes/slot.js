import express from "express";
import { findAllSlots, findSlotById, addSlot, updateSlot, deleteSlot } from '../Controllers/slotController.js';

const router = express.Router();

//get all slots
router.get('/', findAllSlots);
router.get('/:id', findSlotById);
router.put('/:id', updateSlot);
router.delete('/:id', deleteSlot);

export default router;