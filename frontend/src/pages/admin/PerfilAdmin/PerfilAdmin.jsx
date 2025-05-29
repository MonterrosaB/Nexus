import React, { useState } from "react";

const PerfilAdmin = () => {
  const [avatar, setAvatar] = useState("/admin-avatar.png");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordUpdate = () => {
    if (newPassword.trim()) {
      alert("Contraseña actualizada con éxito");
      setPassword(newPassword);
      setNewPassword("");
    } else {
      alert("Ingrese una nueva contraseña válida");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Cuenta del Administrador</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-all">Cerrar sesión</button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-300 mb-4 overflow-hidden">
            <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="text-sm text-gray-600"
          />
          <h2 className="text-xl font-semibold text-gray-700 mt-4">Nombre del Admin</h2>
          <p className="text-gray-500">Rol: Administrador</p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="dui" className="block text-sm font-medium text-gray-700">DUI</label>
            <input id="dui" value="12345678-9" disabled className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
            <input id="email" value="admin@nexus.com" disabled className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input id="phone" value="7777-8888" disabled className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>
      </div>

      <div className="my-8 border-t" />

      <div className="space-y-4">
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-xl text-gray-700">Información</button>
          <button className="px-4 py-2 bg-gray-200 rounded-xl text-gray-700">Seguridad</button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input id="name" value="Admin" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Apellido</label>
            <input id="lastname" value="Principal" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
            <input id="dob" type="date" value="1985-05-15" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sexo</label>
            <input id="sex" value="Masculino" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado</label>
            <input id="status" value="Activo" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
          <div>
            <label htmlFor="user" className="block text-sm font-medium text-gray-700">Usuario</label>
            <input id="user" value="admin01" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña nueva</label>
            <input
              id="password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="********"
            />
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all"
            onClick={handlePasswordUpdate}
          >
            Actualizar contraseña
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilAdmin;
