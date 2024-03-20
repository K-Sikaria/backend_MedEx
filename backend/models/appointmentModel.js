import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  email: { 
    type: String, 
    require: true 
  },
  firstName: { 
    type: String, 
    require: true 
  },
  lastName: { 
    type: String, 
    require: true 
  },
  slot: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'slot'
  }
}, 
{ versionKey: false });

export default mongoose.model("appointment", appointmentSchema);