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


const useDataUsuarios = () => {
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

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:4000/api/users");

    if (!response.ok) {
      throw new Error("Hubo un error al obtener los usuarios");
    }

    const data = await response.json();
    console.log(data);
    
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
        dui : DUI,
        firstName : userFirstName,
        lastName : userLastName,
        role : userRole,
        email : userEmail,
        username : username,
        password : userPassword,
        phoneNumber : userPhoneNumber,
        birthDate : userBirthdate,
        sex : userSex,
        status : userStatus
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
    saveUser
  };

};
export default useDataUsuarios;
