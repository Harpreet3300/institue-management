import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const studentSchema = mongoose.Schema({

  profileImage: {
    url: {
      type: String,
      required: true
    },
    publicId: {
      type: String,
      required: true
    }
  },
  name: {
    type: String,
    required: true
  },
  fathername: {
    type: String,
    required: true
  },
  mothername: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  courseDuration: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'student'
  }
}, {
  timestamps: true
});

studentSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

studentSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
export default Student;