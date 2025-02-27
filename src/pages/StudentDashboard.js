import React from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tamil Tutor Dashboard</h1>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome, Student!</h2>
        <p className="text-lg text-gray-700 mb-8">
          Start learning Tamil interactively with our full suite of tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Interactive Lessons */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
            <p className="text-gray-700 mb-4">
              Dive into engaging video lessons, interactive exercises, and quizzes.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Start Learning
            </button>
          </div>

          {/* Personalized Learning Path */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Your Learning Path</h3>
            <p className="text-gray-700 mb-4">
              Track your progress, view completed modules, and get course recommendations.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              View Progress
            </button>
          </div>

          {/* Assignments & Assessments */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Assignments & Quizzes</h3>
            <p className="text-gray-700 mb-4">
              Access your assignments and quizzes to reinforce your learning.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Check Assignments
            </button>
          </div>

          {/* Live Classes & Chat */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Live Classes & Chat</h3>
            <p className="text-gray-700 mb-4">
              Join live sessions or chat with tutors and peers for real-time support.
            </p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
              Join Live Class
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

export default StudentDashboard;
