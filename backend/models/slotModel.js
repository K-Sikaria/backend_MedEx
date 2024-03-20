import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  slotTime: { 
    type: String, 
    require: true 
  },
  slotDate: {
    type: String, 
    require: true 
  }, 
}, 
{ versionKey: false }
);

export default mongoose.model("user", slotSchema);