import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signin, isAuthenticated,user, errors: signinErrors} = useAuth()

    const navigate = useNavigate();

  useEffect(() => {
  if (isAuthenticated && user) {
    navigate("/admin/inicio");
  }
}, [isAuthenticated, user]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {Array.isArray(signinErrors) &&
  signinErrors.map((err, i) => <p key={i}>{err}</p>)}
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Iniciar sesion
        </h2>

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
    ¿No tienes una cuenta?{" "}
    <Link to="/register" className="text-blue-600 hover:underline">
      Registrarse
    </Link>
  </p>
      </form>

       
    </div>
  );
}

export default Login;
