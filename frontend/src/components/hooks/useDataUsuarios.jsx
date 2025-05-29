/*
    dui,
    firstName,
    lastName,
    role,
    email,
    username,
    password,
    phoneNumber,
    birthDate,
    sex,
    status
*/

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


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
    setUserRole("");
    setUserEmail("");
    setUsername("");
    setUserPassword("");
    setUserPhoneNumber("");
    setUserBirthdate("");
    setUserSex("");
    setUserStatus("");
    setId("")
  };

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:4000/api/users");

    if (!response.ok) {
      throw new Error("Hubo un error al obtener los usuarios");
    }

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  // useEffect
  useEffect(() => {
    fetchUsers();
  }, []);

  const saveUser = async (e) => {
    e.preventDefault();

    const newUser = {
      dui: dui,
      firstName: userFirstName,
      lastName: userLastName,
      role: userRole,
      email: userEmail,
      username: username,
      password: userPassword,
      phoneNumber: userPhoneNumber,
      birthDate: userBirthdate,
      sex: userSex,
      status: userStatus
    };

    const response = await fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("Hubo un error al registrar el usuario");
    }

    const data = await response.json();
    console.log(data);

    alert("Usuario registrada correctamente");
    fetchUsers();
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/${id}`,
        {
          method: "DELETE",
          body: JSON.stringify(deleteUser),
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el proveedor");
      }

      const result = await response.json();
      console.log("Deleted:", result);

      // Actualizar la lista después de borrar
      fetchUsers();
    } catch (error) {
      console.error("Error deleting employee sfs:", error);
    }
  };

  const navigateForm = (user) => {
    navigate("/admin/agregar-usuario", { state: { user } });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = {
        dui: dui,
        firstName: userFirstName,
        lastName: userLastName,
        role: userRole,
        email: userEmail,
        username: username,
        phoneNumber: userPhoneNumber,
        birthDate: userBirthdate,
        sex: userSex,
        status: userStatus
      };

      const response = await fetch(
        `http://localhost:4000/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar el usuario" + Error);
      }
      cleanData();
      fetchUsers(); // Volver a cargar la lista
    } catch (error) {
      alert("Error al actualizar el usuario");
      console.error(error);
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
