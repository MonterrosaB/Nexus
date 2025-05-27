import Reminder from "../../../components/Reminder";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Image from "../../../assets/image.webp"
import DropDown from "../../../components/DropDown";
const AgregarProductos = () => {
  const data = {
    first: "Se debe llenar todos los campos; de lo contrario, aparecerá un error indicando el/los campos.",
    second: "Para poder agregar productos se debe agregar los siguientes datos:",
    subOne: "- Al menos una categoría",
    subTwo: "- Al menos un proveedor",
    third: "Los precios deben ser mayores a 0"
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
                    <h2 className="font-bold text-3xl text-[#2B3674] pb-3">Producto</h2>

            <Input
              label={"Nombre del producto"}
              id={"producto"}
              type={"text"} />
            <Input
              label={"descripción"}
              id={"descripcion"}
              type={"text"} />
            <div className="flex justify-center items-center gap-4">
              {/*DROPDOWNS*/}
              <DropDown
  id="proveedor"
  label="Proveedor"
  options={[
    { value: "volvo", label: "Volvo" },
    { value: "toyota", label: "Toyota" },
    { value: "ford", label: "Ford" }
  ]}
/>
              <DropDown
  id="proveedor"
  label="Proveedor"
  options={[
    { value: "volvo", label: "Volvo" },
    { value: "toyota", label: "Toyota" },
    { value: "ford", label: "Ford" }
  ]}
/>
            </div>
            <div className="flex justify-center gap-2">
              <Input
                label={"stock"}
                id={"stock"}
                type={"number"} />
              <Input
                label={"precio"}
                id={"precio"}
                type={"number"} />
            </div>
            <Button
              text={"Agregar Productos"}
            />
          </div>
          <div class="flex items-center justify-center flex-col bg-[#FFF] p-8 gap-8 rounded-md shadow-md w-lg">
            <img src={Image} alt="" className="" />
            <label class="bg-[#DFEAF6] w-full p-2.5 rounded-lg font-medium cursor-pointer mx-auto flex items-center justify-center" id="">
              <span>Agrega una imagen</span>
              <input type="file" class="hidden" id="" /> 
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarProductos;
