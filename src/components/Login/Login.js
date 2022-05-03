import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../Alert/Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, logout, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            setError("Usuario no encontrado, por favor registrese");
        } else if (error.code === "auth/invalid-email") {
            setError("El email ingresado no es valido.");
        } else if (error.code === "auth/operation-not-allowed") {
            setError("Operacion no permitida.");
        } else if (error.code === "auth/wrong-password") {
            setError("Contraseña incorrecta.");
        } else if (error.code === "auth/weak-password") {
            setError("La contraseña ingresada debe tener al menos 6 caracteres.");
        } else if (error.code === "auth/too-many-requests") {
            setError("Acceso deshabilitado por cantidad de intentos, vuelva a intentar mas tarde.");
        } else 
        setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escribe tu email para resetear la contraseña");
    try {
      await resetPassword(user.email);
      setError('Te enviamos un email. Revisa tu inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto ">
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className=" mb-4">INICIA SESIÓN</h3>
        <div className="mb-1">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"></label>
          <input type="email" name="email" id="email" onChange={handleChange}
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
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password..."
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="btn btn-secondary me-2 my-3"
            type="submit"
          >
            INICIAR SESIÓN
          </button>
        <div className="mb-4">
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
            onClick={handleResetPassword}
          >
            Has olvidado tu contraseña?
          </a>
          </div>
        </div>
      </form>
      <p className="my-2 text-sm flex justify-between px-3">
        No tenes cuenta?
        <Link to="/register" className="text-blue-700 hover:text-blue-900">
           Registrate
        </Link>
      </p>
      <button
          className="btn btn-secondary my-3"
          onClick={handleLogout}
        >
          SALIR
      </button>
    </div>
  );
}