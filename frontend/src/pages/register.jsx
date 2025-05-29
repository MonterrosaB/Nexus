import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext.jsx";
import { useEffect } from "react";
import {useNavigate, Link } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

   // useEffect(() => {
     //   if (isAuthenticated) navigate("/login");
   // }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
const success = await signUp(values);
  if (success) {
    navigate("/login");}
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {Array.isArray(registerErrors) &&
        registerErrors.map((err, i) => <p key={i}>{err}</p>)}
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Registro
        </h2>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Usuario
          </label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.username && <p>Username is required</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p>email is required</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p>password is required</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Continuar
        </button>

         <p className="text-sm text-gray-700">
    ¿Ya tienes una cuenta?{" "}
    <Link to="/login" className="text-blue-600 hover:underline">
      Iniciar sesión
    </Link>
  </p>
      </form>
    </div>
  );
}

export default Register;
