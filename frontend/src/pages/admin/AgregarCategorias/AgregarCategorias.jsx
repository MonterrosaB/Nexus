import Reminder from "../../../components/Reminder";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Image from "../../../assets/categoria.webp"

import useDataCategorias from "../../../components/hooks/useDataCategorias"

import { useEffect } from "react";
import { useLocation } from 'react-router';

const AgregarCategorias = () => {

    const location = useLocation();
    const category = location.state?.category

    const {
        categoryName, setCategoryName,
        id, setId,
        saveCategory, handleUpdate
    } = useDataCategorias();

    useEffect(() => {
        if (category) {
            setId(category._id);
            setCategoryName(category.name);
        }
    }, [category]);

    const data = {
        first: "Recuerda ingresar el Nombre de la categoría.",
        second: "Este campo es obligatorio y debe contener texto válido.",
        subOne: "-El nombre no puede estar vacío ni tener solo espacios.",
        subTwo: "-El nombre debe ser único y no repetirse con otras categorías existentes.",
        third: "Si este campo no se llena correctamente, se mostrará un error indicando el problema."
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
                        <h2 className="font-bold text-3xl text-[#2B3674] pb-3">Categoría</h2>
                        <Input
                            label={"Nombre de la categoría"}
                            id={"nombre"}
                            type={"text"}
                            onChange={(e) => setCategoryName(e.target.value)}
                            value={categoryName}
                        />
                        {!id ? (
                            <Button
                                text={"Agregar Categoría"}
                                onClick={saveCategory}
                            />
                        ) : (
                            <Button
                                text={"Actualizar Categoría"}
                                onClick={handleUpdate}
                            />
                        )}
                    </div>
                </form>
            </div>

        </div>
    )
}
export default AgregarCategorias;