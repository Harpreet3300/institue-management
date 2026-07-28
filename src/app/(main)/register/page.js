"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StudentRegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    fathername: "",
    mothername: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "Male",
    dateOfBirth: "",
    address: "",
    course: "",
    courseDuration: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (profileImage) data.append("profileImage", profileImage);

      const res = await fetch("/api/student/auth/register", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Registration failed");

      localStorage.setItem("studentToken", result.token);
      localStorage.setItem("studentData", JSON.stringify(result.student));
      setMessage(`Registration successful! Welcome ${result.student?.name || "student"}.`);
      router.push("/login");
    } catch (error) {
      setMessage(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-2xl font-bold">Student Registration</h1>
        <p className="mb-6 text-sm text-gray-600">Test the student register API here.</p>

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Name</label>
            <input name="name" value={formData.name} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Father Name</label>
            <input name="fathername" value={formData.fathername} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Mother Name</label>
            <input name="mothername" value={formData.mothername} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Phone Number</label>
            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full rounded border border-gray-300 px-3 py-2">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Date of Birth</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium">Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Course</label>
            <input name="course" value={formData.course} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Course Duration</label>
            <input name="courseDuration" value={formData.courseDuration} onChange={handleChange} required className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium">Profile Photo</label>
            <input type="file" accept="image/*" onChange={(e) => setProfileImage(e.target.files?.[0] || null)} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>

          <div className="md:col-span-2">
            <button type="submit" disabled={loading} className="w-full rounded bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700 disabled:opacity-70">
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        {message ? <p className="mt-4 text-sm text-gray-700">{message}</p> : null}
      </div>
    </div>
  );
}