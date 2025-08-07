import mongoose, { Schema, Document, Model } from 'mongoose';



// 2. Create the schema
const LabSchema = new Schema({
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10,15}$/
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  labName: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /\S+@\S+\.\S+/
  },
  patientCount: {
    type: String,
    default: "0",
  },
  previousSoftware: {
    type: String
  }
});

// 3. Create and export the model
const Lab = mongoose.model('Lab', LabSchema);
export default Lab;
