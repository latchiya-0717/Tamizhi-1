import React from "react";
import { useNavigate } from "react-router-dom";

const TutorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tutor Dashboard</h1>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome, Tutor!</h2>
        <p className="text-lg text-gray-700 mb-8">
          Manage your Tamil lessons and students with our suite of tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Student Requests */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Student Requests</h3>
            <p className="text-gray-700 mb-4">
              View and manage requests from students for tutoring sessions.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              View Requests
            </button>
          </div>

          {/* Course & Content Management */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Course Management</h3>
            <p className="text-gray-700 mb-4">
              Create, update, and manage your Tamil lesson content.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Manage Courses
            </button>
          </div>

          {/* Live Class Scheduling */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Live Classes</h3>
            <p className="text-gray-700 mb-4">
              Schedule and manage your live tutoring sessions with students.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Schedule Session
            </button>
          </div>

          {/* Assignments & Assessments */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Assignments & Assessments</h3>
            <p className="text-gray-700 mb-4">
              Create assignments and review assessments submitted by students.
            </p>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
              Manage Assessments
            </button>
          </div>

          {/* Analytics & Reporting */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
            <p className="text-gray-700 mb-4">
              Monitor student progress and course performance with detailed reports.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
              View Analytics
            </button>
          </div>

          {/* Communication Tools */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Communication</h3>
            <p className="text-gray-700 mb-4">
              Chat with students and manage group discussions seamlessly.
            </p>
            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
              Open Chat
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Tamil Tutor. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default TutorDashboard;
