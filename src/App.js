import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RoleSelection from "./pages/RoleSelection"; // ✅ Role selection page
import StudentDashboard from "./pages/StudentDashboard";
import TutorDashboard from "./pages/TutorDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/tutor-dashboard" element={<TutorDashboard />} />
    </Routes>
  );
}

export default App;
