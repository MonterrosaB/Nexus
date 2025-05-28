import { Pencil, Trash } from "lucide-react";
import useDataProveedores from "../../../components/Proveedores/useDataProveedores";
const TablasDatos = () => {
  const { loading, providers, deleteProvider, navigateForm } = useDataProveedores();

  return (
    <>
<div className="p-6 bg-[#F4F7FE] min-h-dvh flex flex-col gap-8">
  <div className="flex flex-col gap-6 relative overflow-x-auto sm:rounded-lg">
    <h2 className="p-4 text-xl font-semibold">Lista de Proveedores</h2>
    <div className="w-full shadow-md border border-gray-300 rounded-full"></div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 p-2">
      <thead className="text-xs uppercase text-black">
        <tr>
          <th className="px-6 py-3">Nombre</th>
          <th className="px-6 py-3">Apellido</th>
          <th className="px-6 py-3">Compañía</th>
          <th className="px-6 py-3">Email</th>
          <th className="px-6 py-3">Teléfono</th>
          <th className="px-6 py-3">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {loading ? (
          <tr>
            <td colSpan={6} className="text-center py-4">Cargando...</td>
          </tr>
        ) : (
          providers.map((provider, index) => (
            <tr key={provider._id || index} className="odd:bg-white shadow-sm">
              <td className="px-6 py-4 text-[#333]">{provider.firstName}</td>
              <td className="px-6 py-4 text-[#333]">{provider.lastName}</td>
              <td className="px-6 py-4 text-[#333]">{provider.company}</td>
              <td className="px-6 py-4 text-[#333]">{provider.email}</td>
              <td className="px-6 py-4 text-[#333]">{provider.phoneNumber}</td>
              <td className="px-6 py-4">
                <div className="flex gap-4 text-[#2600FE]">
                  <Trash 
                  onClick={() => deleteProvider(provider._id)}
                  className="cursor-pointer"
                  />
                  <Pencil 
                  onClick={() => navigateForm(provider)}
                  className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>

    </>
  );
};

export default TablasDatos;
