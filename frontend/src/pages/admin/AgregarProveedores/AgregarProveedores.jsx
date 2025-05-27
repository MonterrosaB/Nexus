import Reminder from "../../../components/Reminder";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Image from "../../../assets/proveedores.webp"


const AgregarProveedores = () => {

    const data = {
        first: "Recuerda ingresar el Nombre completo del proveedor y la compañía.",
        second: "También debes proporcionar un correo electrónico válido* y un Número de teléfono.",
        subOne: "El correo debe tener un formato válido.",
        subTwo: "El número de teléfono debe contener solo números.",
        third: "Todos los campos son obligatorios. Si falta alguno, aparecerá un error indicando el/los campos faltantes."
    }

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
                        <img src={Image} alt="" className="w-sm" />
                    <div>
                        <h2 className="font-bold text-3xl text-[#2B3674] pb-3">Proveedor</h2>
                        <Input
                            label={"Nombre del proveedor"}
                            id={"proveedor"}
                            type={"text"} />
                        <Input
                            label={"Compañía"}
                            id={"compañia"}
                            type={"text"} />
                        <Input
                            label={"Correo Electronico"}
                            id={"email"}
                            type={"email"} />
                        <Input
                            label={"Número de teléfono"}
                            id={"telefono"}
                            type={"string"} />
                        <Button
                            text={"Agregar proveedor"}
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}
export default AgregarProveedores;