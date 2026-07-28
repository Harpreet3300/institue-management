import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const studentSchema = mongoose.Schema({

  profileImage: {
    type: {
      url: { type: String, default: '' },
      publicId: { type: String, default: '' },
    },
    default: {},
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


// Auto-generate Roll Number before saving
studentSchema.pre('save', async function() {
  if (this.rollNo) return;

  const currentYear = new Date().getFullYear();
  const lastUser = await this.constructor.findOne().sort({ rollNo: -1 });

  let newRollNo;
  if (lastUser && lastUser.rollNo && lastUser.rollNo.startsWith(currentYear.toString())) {
    const lastRollNumber = parseInt(lastUser.rollNo.slice(4), 10);
    newRollNo = `${currentYear}${String(lastRollNumber + 1).padStart(3, '0')}`;
  } else {
    newRollNo = `${currentYear}001`;
  }

  this.rollNo = newRollNo;
});

studentSchema.pre('save', async function() {
  if (!this.isModified('password')) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

studentSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
export default Student;