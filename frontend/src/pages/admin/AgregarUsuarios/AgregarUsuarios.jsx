import Reminder from "../../../components/Reminder";
import Input from "../../../components/Input";
import DropDown from "../../../components/DropDown";
import Button from "../../../components/Button";
import Image from "../../../assets/image.webp"
import React, { useState, useEffect } from "react";


import useDataUsuarios from "../../../components/hooks/useDataUsuarios";

const AgregarUsuarios = () => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchCategories = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/categories');
      const data = await res.json();
      const opcionesFormateadas = data.map(cat => ({
        _id: cat._id,
        label: cat.name,
      }));
      setCategories(opcionesFormateadas);
    } catch (error) {
      console.error('Error al cargar categorías:', error);
    }
  };

  // useEffect
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoriaChange = (e) => {
    const idSeleccionado = e.target.value;
    console.log('Categoría seleccionada:', idSeleccionado);
  };

  const {
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
  } =
    useDataUsuarios();

  const data = {
    first: "Se debe llenar todos los campos; de lo contrario, aparecerá un error indicando el/los campos.",
    second: "Para poder agregar productos se debe agregar los siguientes datos",
    subOne: "-El correo electrónico debe tener un formato válido.",
    subTwo: "-El número de teléfono debe contener solo números.",
    third: "El rol es obligatorio para definir los permisos del usuario."
  };

  if (loading) return <p>Cargando...</p>;


  return (
    <div className="p-6 bg-[#F4F7FE] min-h-dvh flex flex-col gap-8">
      <Reminder
        firstOne={data.first}
        secondOne={data.second}
        subOne={data.subOne}
        subTwo={data.subTwo}
        thirdOne={data.third}
      />
      <div>
        <form action="" className="flex items-center justify-around gap-8">
          <div>
            <h2 className="font-bold text-3xl text-[#2B3674] pb-3">Usuario</h2>

            <div className="flex justify-center items-center gap-4">
              <Input
                label={"Nombre del empleado"}
                id={"nombre"}
                type={"text"}
                onChange={(e) => setUserFirstName(e.target.value)}
                value={userFirstName}
              />
              <Input
                label={"Apellido del empleado"}
                id={"apellido"}
                type={"text"}
                onChange={(e) => setUserLastName(e.target.value)}
                value={userLastName}
              />
            </div>
            <Input
              label={"Correo Electronico"}
              id={"email"}
              type={"email"}
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
            />
            <Input
              label={"Nombre de Usuario"}
              id={"user"}
              type={"text"}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Input
              label={"Contraseña"}
              id={"contraseña"}
              type={"password"}
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
            />
            <div className="flex justify-center items-center gap-4">
              <Input
                label={"DUI"}
                id={"dui"}
                type={"text"}
                onChange={(e) => setUserDUI(e.target.value)}
                value={dui} />
              <Input
                label={"Número de teléfono"}
                id={"telefono"}
                type={"text"}
                onChange={(e) => setUserPhoneNumber(e.target.value)}
                value={userPhoneNumber} />
            </div>
            <div className="flex justify-center items-center gap-4">
              {/*DROPDOWNS*/}
              <DropDown
                id="sexo"
                label="sexo"
                options={[
                  { value: "M", label: "Masculino" },
                  { value: "F", label: "Femenino" }
                ]}
              />
              <Input
                label={"Fecha de Nacimiento"}
                id={"birth"}
                type={"date"} />

              <DropDown
                id="categoria"
                label="categorias"
                options={categories}
                onChange={handleCategoriaChange}
              />
            </div>
            <Button
              text={"Agregar Usuario"}
              onClick={saveUser}
            />
          </div>
          <div className="flex items-center justify-center flex-col bg-[#FFF] p-8 gap-8 rounded-md shadow-md w-lg h-full">
            <img src={Image} alt="" className="" />
            <label className="bg-[#DFEAF6] w-full p-2.5 rounded-lg font-medium cursor-pointer mx-auto flex items-center justify-center" id="">
              <span>Agrega una imagen</span>
              <input type="file" className="hidden" id="" />
            </label>
          </div>
        </form>
      </div>
    </div>
  )
};

export default AgregarUsuarios;