import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current.focus();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
      navigate("/todo");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Please enter username");
      return;
    }
    setUser(username);
    localStorage.setItem("user", username);
    navigate("/todo");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black ">
      <div className="border border-gray-300 rounded-md p-6 w-80 shadow-sm transform -translate-y-30">
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <h1 className="text-xl font-semibold">Sign in or create account</h1>

          <div>
            <label className="block font-bold text-sm mb-1">
              Enter mobile number or email
            </label>
            <input
              ref={inputRef}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Phone number or Email"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              autoComplete="current-username"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-full"
          >
            Continue
          </button>
          <p className="text-sm">
            By continuing, you agree to Amazon's{" "}
            <Link to="#" className="hover:underline text-blue-900">
              Conditions of Use{" "}
            </Link>{" "}
            and{" "}
            <Link to="#" className="hover:underline text-blue-900">
              Privacy Notice.
            </Link>
          </p>

          <hr className="border-t border-gray-300 mt-2" />

          <p className="font-semibold text-sm">Buying for work?</p>
          <Link to="#" className="hover:underline text-blue-900">
            Create a free business account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
