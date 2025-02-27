import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    localStorage.setItem("role", role); // Save role to localStorage (optional)
    
    if (role === "student") {
      navigate("/student-dashboard"); // ✅ Redirect to Student Dashboard
    } else {
      navigate("/tutor-dashboard"); // ✅ Redirect to Tutor Dashboard
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Are you a Student or Tutor?</h1>
      <div className="flex space-x-6">
        <button
          onClick={() => handleRoleSelection("student")}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          I am a Student
        </button>
        <button
          onClick={() => handleRoleSelection("tutor")}
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          I am a Tutor
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
