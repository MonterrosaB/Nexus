import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2"; // asegúrate de tenerlo instalado

const useDataUsuarios = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dui, setUserDUI] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userBirthdate, setUserBirthdate] = useState("");
  const [userSex, setUserSex] = useState("");
  const [userStatus, setUserStatus] = useState(false);
  const [id, setId] = useState("");

  const cleanData = () => {
    setUserDUI("");
    setUserFirstName("");
    setUserLastName("");
    setUserRole("");
    setUserEmail("");
    setUsername("");
    setUserPassword("");
    setUserPhoneNumber("");
    setUserBirthdate("");
    setUserSex("");
    setUserStatus(false);
    setId("");
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/users");
      if (!response.ok) throw new Error("Hubo un error al obtener los usuarios");

      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error"
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const saveUser = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!dui || !userFirstName || !userLastName || !userRole || !userEmail ||
      !username || !userPassword || !userPhoneNumber || !userBirthdate || !userSex) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor completa todos los campos obligatorios.",
        icon: "warning"
      });
      return;
    }

    if (!/^\d{8}-\d$/.test(dui)) {
  Swal.fire({
    title: "DUI inválido",
    text: "El DUI debe tener el formato correcto (ej: 12345678-9).",
    icon: "error"
  });
  return;
}


    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      Swal.fire({
        title: "Correo inválido",
        text: "Ingresa un correo electrónico válido.",
        icon: "error"
      });
      return;
    }

    const newUser = {
      dui,
      firstName: userFirstName,
      lastName: userLastName,
      role: userRole,
      email: userEmail,
      username,
      password: userPassword,
      phoneNumber: userPhoneNumber,
      birthDate: userBirthdate,
      sex: userSex,
      status: userStatus
    };

    try {
      const response = await fetch("http://localhost:4000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) throw new Error("Error al registrar el usuario");

      const data = await response.json();
      console.log(data);

      Swal.fire({
        title: "Usuario registrado",
        text: `${userFirstName} ha sido agregado correctamente.`,
        icon: "success"
      });

      fetchUsers();
      cleanData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error"
      });
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Error al eliminar el usuario");

      const result = await response.json();
      console.log("Deleted:", result);

      Swal.fire({
        title: "Usuario eliminado",
        text: "El usuario fue eliminado correctamente.",
        icon: "success"
      });

      fetchUsers();
    } catch (error) {
      Swal.fire({
        title: "Error al eliminar",
        text: error.message,
        icon: "error"
      });
    }
  };

  const navigateForm = (user) => {
    navigate("/admin/agregar-usuario", { state: { user } });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = {
        dui,
        firstName: userFirstName,
        lastName: userLastName,
        role: userRole,
        email: userEmail,
        username,
        phoneNumber: userPhoneNumber,
        birthDate: userBirthdate,
        sex: userSex,
        status: userStatus
      };

      const response = await fetch(
        `http://localhost:4000/api/users/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        }
      );

      if (!response.ok) throw new Error("Error al actualizar el usuario");

      Swal.fire({
        title: "Usuario actualizado",
        text: "Los datos del usuario se actualizaron correctamente.",
        icon: "success"
      });

      cleanData();
      fetchUsers();
    } catch (error) {
      Swal.fire({
        title: "Error al actualizar",
        text: error.message,
        icon: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    users,
    dui, setUserDUI,
    userFirstName, setUserFirstName,
    userLastName, setUserLastName,
    userRole, setUserRole,
    userEmail, setUserEmail,
    username, setUsername,
    userPassword, setUserPassword,
    userPhoneNumber, setUserPhoneNumber,
    userBirthdate, setUserBirthdate,
    userSex, setUserSex,
    userStatus, setUserStatus,
    id, setId,
    saveUser, deleteUser,
    handleUpdate, navigateForm
  };
};

export default useDataUsuarios;
