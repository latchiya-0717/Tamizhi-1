import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landingpage.css";



const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-5 bg-white shadow-md">
        <div className="flex items-center">
          <img src="/logo.png" alt="Tamil Tutor Logo" className="h-12 mr-3" />
          <h1 className="text-2xl font-bold text-gray-800">Tamil Tutor</h1>
        </div>
        <div>
          <Link to="/login" className="px-4 py-2 text-blue-600">Login</Link>
          <Link to="/signup" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded">Sign Up</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Learn Tamil Easily with One-on-One Tutoring!
        </h2>
        <p className="text-gray-600">
          Join now and start your journey to mastering Tamil.
        </p>
      </main>
    </div>
  );
};

export default LandingPage;
