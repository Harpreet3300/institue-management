import { Readable } from 'stream';
import jwt from 'jsonwebtoken';
import connectDB from '@/src/lib/DBconnection';
import cloudinary from '@/src/lib/cloudinary';
import Student from '@/src/models/student';

const uploadToCloudinary = async (file) => {
  if (!file) {
    return null;
  }

  if (!process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    return null;
  }

  if (typeof file === 'string') {
    const result = await cloudinary.uploader.upload(file, {
      folder: 'students/profile-images',
      resource_type: 'image',
      transformation: [
        { width: 1200, crop: 'limit' },
        { quality: 'auto' },
      ],
    });

    return result;
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'students/profile-images',
        resource_type: 'image',
        transformation: [
          { width: 1200, crop: 'limit' },
          { quality: 'auto' },
        ],
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    Readable.from(buffer).pipe(uploadStream);
  });
};

export async function POST(req) {
  try {
    await connectDB();

    const contentType = req.headers.get('content-type') || '';
    let body;

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const profileImageFile = formData.get('profileImage');
      const profileImage = profileImageFile instanceof File ? profileImageFile : null;

      body = {
        name: formData.get('name')?.toString() || '',
        fathername: formData.get('fathername')?.toString() || '',
        mothername: formData.get('mothername')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        password: formData.get('password')?.toString() || '',
        phoneNumber: formData.get('phoneNumber')?.toString() || '',
        gender: formData.get('gender')?.toString() || '',
        dateOfBirth: formData.get('dateOfBirth')?.toString() || '',
        address: formData.get('address')?.toString() || '',
        course: formData.get('course')?.toString() || '',
        courseDuration: formData.get('courseDuration')?.toString() || '',
        profileImage,
      };
    } else {
      body = await req.json();
    }

    const {
      name,
      fathername,
      mothername,
      email,
      password,
      phoneNumber,
      gender,
      dateOfBirth,
      address,
      course,
      courseDuration,
      profileImage,
    } = body;

    if (!name || !fathername || !mothername || !email || !password || !phoneNumber || !gender || !dateOfBirth || !address || !course || !courseDuration) {
      return new Response(JSON.stringify({ message: 'Please fill in all required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return new Response(JSON.stringify({ message: 'Student already exists with this email' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const uploadedImage = await uploadToCloudinary(profileImage);

    const student = await Student.create({
      profileImage: uploadedImage
        ? {
            url: uploadedImage.secure_url,
            publicId: uploadedImage.public_id,
          }
        : {
            url: '',
            publicId: '',
          },
      name,
      fathername,
      mothername,
      email,
      password,
      phoneNumber,
      gender,
      dateOfBirth: new Date(dateOfBirth),
      address,
      course,
      courseDuration,
      role: 'student',
    });

    const token = jwt.sign(
      { id: student._id, role: student.role },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    const studentResponse = student.toObject();
    delete studentResponse.password;

    return new Response(
      JSON.stringify({
        message: 'Student registered successfully',
        token,
        student: studentResponse,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Student registration error:', error);
    return new Response(JSON.stringify({ message: error.message || 'Registration failed', stack: error.stack }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
