import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:   { type: String, required: true },
    age:    { type: Number, required: true, min: 1, max: 100 },
    course: { type: String, required: true },
});

export default mongoose.model("Student", studentSchema);