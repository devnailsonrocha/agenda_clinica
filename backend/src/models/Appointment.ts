import mongoose, { Document, Schema } from "mongoose";

export interface IAppointment extends Document {
  userId: string;
  date: string;
  time: string;
  cep: string;
  address: string;
}

const AppointmentSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  cep: { type: String, required: true },
  address: { type: String, required: true }
});

export default mongoose.model<IAppointment>("Appointment", AppointmentSchema);