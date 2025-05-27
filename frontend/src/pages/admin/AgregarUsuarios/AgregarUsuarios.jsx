import Reminder from "../../../components/Reminder";
import Input from "../../../components/Input";
import DropDown from "../../../components/DropDown";
import Button from "../../../components/Button";
import Image from "../../../assets/image.webp"
const AgregarUsuarios = () => {

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
        <form action="" className="flex items-center justify-around gap-8">
          <div>
                    <h2 className="font-bold text-3xl text-[#2B3674] pb-3">Usuario</h2>

            <Input
              label={"Nombre del empleado"}
              id={"nombre"}
              type={"text"} />
            <Input
              label={"Correo Electronico"}
              id={"email"}
              type={"email"} />
              <Input
              label={"Nombre de Usuario"}
              id={"user"}
              type={"text"} />
              <Input
              label={"Contraseña"}
              id={"contraseña"}
              type={"password"} />
              <div className="flex justify-center items-center gap-4">
                <Input
              label={"DUI"}
              id={"dui"}
              type={"text"} />
              <Input
              label={"Número de teléfono"}
              id={"telefono"}
              type={"text"} />
            </div>
            <div className="flex justify-center items-center gap-4">
              {/*DROPDOWNS*/}
              <DropDown
  id="sexo"
  label="Sexo"
  options={[
    { value: "volvo", label: "Volvo" },
    { value: "toyota", label: "Toyota" },
    { value: "ford", label: "Ford" }
  ]}
/>
<Input
              label={"Fecha de Nacimiento"}
              id={"birth"}
              type={"date"} />

              <DropDown
  id="rol"
  label="Rol"
  options={[
    { value: "volvo", label: "Volvo" },
    { value: "toyota", label: "Toyota" },
    { value: "ford", label: "Ford" }
  ]}
/>
            </div>
            <Button
              text={"Agregar Usuario"}
            />
          </div>
          <div class="flex items-center justify-center flex-col bg-[#FFF] p-8 gap-8 rounded-md shadow-md w-lg h-full">
            <img src={Image} alt="" className="" />
            <label class="bg-[#DFEAF6] w-full p-2.5 rounded-lg font-medium cursor-pointer mx-auto flex items-center justify-center" id="">
              <span>Agrega una imagen</span>
              <input type="file" class="hidden" id="" /> 
            </label>
          </div>
        </form>
      </div>
    </div>
  )
};

export default AgregarUsuarios;