import React, { useState } from "react";
import { useRouter } from "next/router";
import UserService from "@/services/UserService";

const UserLoginForm: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [statusMessages, setStatusMessages] = useState<any[]>([]);
  const router = useRouter();

  const clearErrors = () => {
    setNameError(null);
    setPasswordError(null);
    setStatusMessages([]);
  };

  const validate = (): boolean => {
    let result = true;

    if (!name && name.trim() === "") {
      setNameError("Username is required");
      result = false;
    }

    if (!password && password.trim() === "") {
      setPasswordError("Password is required");
      result = false;
    }

    return result;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    clearErrors();

    if (!validate()) {
      return;
    }

    const user = { email: name, password };
    const response = await UserService.loginUser(user);

    if (response.status === 200) {
      setStatusMessages([{
        message: "Login successful",
        type: "success",
      }]);

      const user = await response.json();
      sessionStorage.setItem("loggedInUser", JSON.stringify({
        token: user.token,
        fullname: user.fullname,
        username: user.username,
        role: user.role,
      }));

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else if (response.status === 401) {
      const { errorMessage } = await response.json();
      setStatusMessages([{ message: errorMessage, type: 'error' }]);
    } else {
      setStatusMessages([{
        message: "An error occurred, please try again later",
        type: 'error',
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-3xl shadow-2xl">
        <h3 className="text-center text-white text-3xl font-semibold mb-6">Login</h3>

        {statusMessages && (
          <div className="mb-4">
            <ul className="list-none mb-3">
              {statusMessages.map(({ message, type }, index) => (
                <li
                  key={index}
                  className={`text-sm font-medium ${type === "error" ? "text-red-500" : "text-green-500"}`}
                >
                  {message}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="nameInput" className="block text-white text-sm font-medium mb-2">Username</label>
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full p-4 bg-gray-700 border-2 border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            />
            {nameError && <div className="text-red-500 mt-1 text-sm">{nameError}</div>}
          </div>

          <div className="mb-6">
            <label htmlFor="passwordInput" className="block text-white text-sm font-medium mb-2">Password</label>
            <input
              id="passwordInput"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full p-4 bg-gray-700 border-2 border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            />
            {passwordError && <div className="text-red-500 mt-1 text-sm">{passwordError}</div>}
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLoginForm;
