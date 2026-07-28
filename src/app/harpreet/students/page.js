'use client';

import { useEffect, useState } from 'react';

const initialFormState = {
  name: '',
  fathername: '',
  mothername: '',
  email: '',
  password: '',
  phoneNumber: '',
  gender: '',
  dateOfBirth: '',
  address: '',
  course: '',
  courseDuration: '',
  role: 'student',
};

export default function AdminStudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [message, setMessage] = useState('');

  const fetchStudents = async () => {
    try {
      const res = await fetch('/api/admin/students');
      const data = await res.json();
      setStudents(data);
    } catch (error) {
      setMessage('Failed to load students');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleEdit = (student) => {
    setEditingId(student._id);
    setFormData({
      name: student.name || '',
      fathername: student.fathername || '',
      mothername: student.mothername || '',
      email: student.email || '',
      password: '',
      phoneNumber: student.phoneNumber || '',
      gender: student.gender || '',
      dateOfBirth: student.dateOfBirth ? new Date(student.dateOfBirth).toISOString().split('T')[0] : '',
      address: student.address || '',
      course: student.course || '',
      courseDuration: student.courseDuration || '',
      role: student.role || 'student',
    });
    setProfileImage(null);
    setPreviewUrl(student.profileImage?.url || '');
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('id', editingId);

      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          form.append(key, value);
        }
      });

      if (profileImage) {
        form.append('profileImage', profileImage);
      }

      const res = await fetch('/api/admin/students', {
        method: 'PUT',
        body: form,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Update failed');

      setMessage('Student updated successfully');
      setEditingId(null);
      setFormData(initialFormState);
      setProfileImage(null);
      setPreviewUrl('');
      fetchStudents();
    } catch (error) {
      setMessage(error.message || 'Update failed');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this student?')) return;

    try {
      const res = await fetch(`/api/admin/students?id=${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Delete failed');

      setMessage('Student deleted successfully');
      fetchStudents();
    } catch (error) {
      setMessage(error.message || 'Delete failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl rounded-xl bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Manage Students</h1>
            <p className="text-sm text-gray-600">View, update, and delete student accounts.</p>
          </div>
        </div>

        {message ? <div className="mb-4 rounded border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700">{message}</div> : null}

        {loading ? (
          <p className="text-gray-600">Loading students...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border px-3 py-2">Name</th>
                  <th className="border px-3 py-2">Email</th>
                  <th className="border px-3 py-2">Course</th>
                  <th className="border px-3 py-2">Phone</th>
                  <th className="border px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id} className="hover:bg-gray-50">
                    <td className="border px-3 py-2">{student.name}</td>
                    <td className="border px-3 py-2">{student.email}</td>
                    <td className="border px-3 py-2">{student.course}</td>
                    <td className="border px-3 py-2">{student.phoneNumber}</td>
                    <td className="border px-3 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(student)}
                          className="rounded bg-blue-600 px-3 py-1 text-white"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(student._id)}
                          className="rounded bg-red-600 px-3 py-1 text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {editingId ? (
          <form onSubmit={handleUpdate} className="mt-6 rounded-lg border bg-gray-50 p-4">
            <h2 className="mb-3 text-lg font-semibold">Edit Student</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded border px-3 py-2"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2"
                placeholder="Father's Name"
                value={formData.fathername}
                onChange={(e) => setFormData({ ...formData, fathername: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2"
                placeholder="Mother's Name"
                value={formData.mothername}
                onChange={(e) => setFormData({ ...formData, mothername: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2"
                placeholder="New Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
              <select
                className="rounded border px-3 py-2"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                className="rounded border px-3 py-2"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2"
                placeholder="Course"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2"
                placeholder="Course Duration"
                value={formData.courseDuration}
                onChange={(e) => setFormData({ ...formData, courseDuration: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2"
                placeholder="Role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-gray-700">Profile Photo</label>
              <input
                type="file"
                accept="image/*"
                className="w-full rounded border border-gray-300 px-3 py-2"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setProfileImage(file);
                  if (file) {
                    setPreviewUrl(URL.createObjectURL(file));
                  }
                }}
              />
              {previewUrl ? (
                <img src={previewUrl} alt="Student preview" className="mt-3 h-24 w-24 rounded-full object-cover" />
              ) : null}
            </div>

            <div className="mt-4 flex gap-2">
              <button type="submit" className="rounded bg-green-600 px-4 py-2 text-white">
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setFormData(initialFormState);
                  setProfileImage(null);
                  setPreviewUrl('');
                }}
                className="rounded bg-gray-500 px-4 py-2 text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}
