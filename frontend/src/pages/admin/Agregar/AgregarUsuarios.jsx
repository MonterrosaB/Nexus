import Reminder from "../../../components/Reminder";
import Input from "../../../components/Input";
import DropDown from "../../../components/DropDown";
import Button from "../../../components/Button";
import Image from "../../../assets/image.webp"

import useDataUsuarios from "../../../components/hooks/useDataUsuarios";

import { useEffect } from "react";
import { useLocation } from 'react-router';

const AgregarUsuarios = () => {

  const location = useLocation();
  const user = location.state?.user;

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
    saveUser, handleUpdate
  } =
    useDataUsuarios();

  useEffect(() => {
    if (user) {
      setId(user._id);
      setUserDUI(user.dui);
      setUserFirstName(user.firstName);
      setUserLastName(user.lastName);
      setUserRole(user.role);
      setUserEmail(user.email);
      setUsername(user.username);
      setUserPhoneNumber(user.phoneNumber);
      setUserBirthdate(user.birthDate);
      setUserSex(user.sex);
      setUserStatus(!!user.status);

      if (user.birthDate) {
        const fechaFormateada = new Date(user.birthDate).toISOString().split('T')[0];
        setUserBirthdate(fechaFormateada);
      }
    }
  }, [user]);

  const opcionesSexo = [
    { _id: 'M', label: 'Masculino' },
    { _id: 'F', label: 'Femenino' }
  ];

  const opcionesEstado = [
    { _id: true, label: 'Activo' },
    { _id: false, label: 'Inactivo' }
  ];

  const opcionesRol = [
    { _id: 'Admin', label: 'Admin' },
    { _id: 'Vendedor', label: 'Vendedor' }
  ];

  const data = {
    first: "Se debe llenar todos los campos; de lo contrario, aparecerá un error indicando el/los campos.",
    second: "Para poder agregar productos se debe agregar los siguientes datos",
    subOne: "-El correo electrónico debe tener un formato válido.",
    subTwo: "-El número de teléfono debe contener solo números.",
    third: "El rol es obligatorio para definir los permisos del usuario."
  };


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
        <form action="" className=" items-center justify-around gap-8">
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
            {!id && (
              <Input
                label="Contraseña"
                id="contraseña"
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
              />
            )}

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
                options={opcionesSexo}
                onChange={(e) => setUserSex(e.target.value)}
                value={userSex}
              />
              <DropDown
                id={"estado"}
                label={"Estado"}
                options={opcionesEstado}
                onChange={(e) => setUserStatus(e.target.value)}
                value={userStatus}
              />
              <DropDown
                id="rol"
                label="Rol"
                options={opcionesRol}
                onChange={(e) => setUserRole(e.target.value)}
                value={userRole}
              />
            </div>
            <Input
              label={"f. de nac"}
              id={"birth"}
              type={"date"}
              onChange={(e) => setUserBirthdate(e.target.value)}
              value={userBirthdate} />
            {!id ? (
              <Button
                text={"Agregar Usuario"}
                onClick={saveUser}
              />
            ) : (
              <Button
                text={"Actualizar Proveedor"}
                onClick={handleUpdate}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  )
};

export default AgregarUsuarios;