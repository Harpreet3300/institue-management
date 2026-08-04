// app/api/auth/login/route.js
import jwt from 'jsonwebtoken';
import connectDB from '@/src/lib/DBconnection';
import Student from '@/src/models/student';

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Added .select('+password') to ensure password field is included
    const student = await Student.findOne({ email }).select('+password');
    if (!student) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const isPasswordValid = await student.matchPassword(password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const token = jwt.sign(
      { id: student._id, role: student.role },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    // Convert to plain object and remove password
    const studentResponse = student.toObject();
    delete studentResponse.password;

    return new Response(
      JSON.stringify({
        message: 'Login successful',
        token,
        student: studentResponse,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ message: error.message || 'Login failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}