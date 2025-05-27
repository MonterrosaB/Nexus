import Reminder from "../../../components/Reminder";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Image from "../../../assets/marca.webp"

const AgregarMarcas = () => {

    const data = {
        first: "Recuerda ingresar el Nombre de la marca.",
        second: "Este campo es obligatorio y no puede estar vacío.",
        subOne: "-El nombre debe contener texto válido (no solo espacios).",
        subTwo: "-El nombre de la marca debe ser único y no repetirse con marcas existentes.",
        third: "Si no se completa este campo correctamente, se mostrará un error indicando el problema."
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
                    <img src={Image} alt="" className="w-sm" />
                    <div>
                        <h2 className="font-bold text-3xl text-[#2B3674] pb-3">Marca</h2>
                        <Input
                            label={"Nombre de la marca"}
                            id={"marca"}
                            type={"text"} />
                        <Button
                            text={"Agregar Marca"}
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}
export default AgregarMarcas;