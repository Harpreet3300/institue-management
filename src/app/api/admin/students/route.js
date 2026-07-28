import { Readable } from 'stream';
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

export async function GET() {
  try {
    await connectDB();
    const students = await Student.find({}).sort({ createdAt: -1 }).lean();

    return new Response(JSON.stringify(students), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message || 'Failed to fetch students' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(req) {
  try {
    await connectDB();

    let body = {};
    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const profileImageFile = formData.get('profileImage');
      const profileImage = profileImageFile instanceof File ? profileImageFile : null;

      body = {
        id: formData.get('id')?.toString() || '',
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
        role: formData.get('role')?.toString() || '',
        profileImage,
        removeProfileImage: formData.get('removeProfileImage')?.toString() === 'true',
      };
    } else {
      body = await req.json();
    }

    const { id, ...updates } = body;

    if (!id) {
      return new Response(JSON.stringify({ message: 'Student id is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const student = await Student.findById(id);

    if (!student) {
      return new Response(JSON.stringify({ message: 'Student not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const allowedFields = [
      'name',
      'fathername',
      'mothername',
      'email',
      'phoneNumber',
      'gender',
      'address',
      'course',
      'courseDuration',
      'role',
    ];

    const sanitizedUpdates = {};

    allowedFields.forEach((field) => {
      if (updates[field] !== undefined && updates[field] !== null && updates[field] !== '') {
        sanitizedUpdates[field] = updates[field];
      }
    });

    if (updates.password !== undefined && updates.password !== null && updates.password !== '') {
      sanitizedUpdates.password = updates.password;
    }

    if (updates.dateOfBirth !== undefined && updates.dateOfBirth !== null && updates.dateOfBirth !== '') {
      sanitizedUpdates.dateOfBirth = new Date(updates.dateOfBirth);
    }

    if (updates.profileImage instanceof File) {
      if (student.profileImage?.publicId) {
        await cloudinary.uploader.destroy(student.profileImage.publicId).catch(() => {});
      }

      const uploadedImage = await uploadToCloudinary(updates.profileImage);
      student.profileImage = uploadedImage
        ? {
            url: uploadedImage.secure_url,
            publicId: uploadedImage.public_id,
          }
        : { url: '', publicId: '' };
    } else if (updates.removeProfileImage) {
      if (student.profileImage?.publicId) {
        await cloudinary.uploader.destroy(student.profileImage.publicId).catch(() => {});
      }
      student.profileImage = { url: '', publicId: '' };
    }

    Object.assign(student, sanitizedUpdates);
    await student.save();

    const studentResponse = student.toObject();
    delete studentResponse.password;

    return new Response(JSON.stringify(studentResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message || 'Failed to update student' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ message: 'Student id is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const student = await Student.findByIdAndDelete(id).lean();

    if (!student) {
      return new Response(JSON.stringify({ message: 'Student not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Student deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message || 'Failed to delete student' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
