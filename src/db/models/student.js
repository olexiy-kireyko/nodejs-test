import { model, Schema } from 'mongoose';

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    avgMark: { type: Number, required: true },
    onDuty: { type: Boolean, required: true, default: false },
    parentId: { type: Schema.Types.ObjectId, ref: 'studentsUsers' },
  },
  { timestamps: true, versionKey: false },
);

export const StudentsCollection = model('students', studentSchema);
