import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../Alert/Alert";
export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use"){
        setError("Email en uso");
      } else if (error.code === "auth/wrong-password") {
        setError("La password es muy debil.");
      } else
       setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
      >
        <h3 className=" mb-4">REGISTRATE</h3>
        <div className="mb-1">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email..."
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password..."
          />
        </div>

        <button className="btn btn-secondary me-2 my-3">
          CREAR CUENTA
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Ya tenes cuenta?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
  );
}