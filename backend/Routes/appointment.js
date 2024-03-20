import express from "express";
import {findAllAppointments, addAppointment, editAppointment, deleteAppointment} from '../Controllers/appointmentController.js';
import {validateInput, validateSlot} from '../middlewares.js';
const router = express.Router();

//get all appointments
router.get('/', findAllAppointments);

//add appointment
router.post('/', validateInput, validateSlot, addAppointment);

//update appointment
router.put('/:id', validateInput, validateSlot, editAppointment);

//delete appointment
router.delete('/:id', deleteAppointment);

export default router;