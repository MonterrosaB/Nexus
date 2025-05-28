import Reminder from "../../../components/Reminder";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Image from "../../../assets/proveedores.webp"
import useDataProviders from "../../../components/Proveedores/useDataProveedores"
import { useLocation } from 'react-router';
import { useEffect } from "react";



const AgregarProveedores = () => {

       const location = useLocation();
    const provider = location.state?.provider;

    const {
        providerName,
        setProviderName,
        providerLastName,
        setProviderLastName,
        providerCompany,
        setProviderCompany,
        providerEmail,
        setproviderEmail,
        providerPhoneNumber,
        setProviderPhoneNumber,
        id,
        setId,
        saveProvider,
        handleUpdate,
    } = useDataProviders();

    useEffect(() => {
        if (provider) {
            setId(provider._id);
            setProviderName(provider.firstName);
            setProviderLastName(provider.lastName);
            setProviderCompany(provider.company);
            setproviderEmail(provider.email);
            setProviderPhoneNumber(provider.phoneNumber);
        }
    }, [provider]);

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
                        <div className="flex justify-center gap-2">
                            <Input
                                label={"Nombre del proveedor"}
                                id={"nombreProveedor"}
                                type={"text"}
                                onChange={(e) => setProviderName(e.target.value)}
                                value={providerName} />
                            <Input
                                label={"Apellido del proveedor"}
                                id={"apellidoProveedor"}
                                type={"text"}
                                onChange={(e) => setProviderLastName(e.target.value)}
                                value={providerLastName} />
                        </div>

                        <Input
                            label={"Compañía"}
                            id={"compañia"}
                            type={"text"}
                            onChange={(e) => setProviderCompany(e.target.value)}
                            value={providerCompany} />
                        <Input
                            label={"Correo Electronico"}
                            id={"email"}
                            type={"email"}
                            onChange={(e) => setproviderEmail(e.target.value)}
                            value={providerEmail} />
                        <Input
                            label={"Número de teléfono"}
                            id={"telefono"}
                            type={"string"}
                            onChange={(e) => setProviderPhoneNumber(e.target.value)}
                            value={providerPhoneNumber} />
                        {!id ? (
                            <Button
                                text={"Agregar proveedor"}
                                onClick={saveProvider}
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
}
export default AgregarProveedores;