import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const [error, setError] = useState("");

  const handleSignup = async () => {
    // Validate all fields
    if (!name || !email || !password || !role) {
      setError("⚠️ All fields are required.");
      return;
    }
    
    const payload = { name, email, password, role };
    console.log("Sending signup payload:", payload);
    
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "❌ Signup failed.");
      }
      
      const data = await response.json();
      console.log("Signup successful:", data);
      // Optionally store token or auto-login
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <input 
          type="text" 
          placeholder="Name" 
          className="border p-2 mb-2 w-full" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2 mb-2 w-full" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="border p-2 mb-2 w-full" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select 
          className="border p-2 mb-2 w-full" 
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>
        <button 
          onClick={handleSignup} 
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Sign Up
        </button>
        <p className="mt-2 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
