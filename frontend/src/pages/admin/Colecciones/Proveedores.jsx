
import DataGrid from "../../../components/DataGrid";
import useDataProveedores from "../../../components/hooks/useDataProveedores";
const Proveedores = () => {
  const { loading, providers, deleteProvider, navigateForm } =
    useDataProveedores();

    const columns = {
      "Nombre": "firstName",
      "Apellido": "lastName",
      "Compañia": "company",
      "Correo": "email",
      "Teléfono": "phoneNumber"
    };

  return (
    <>
    {/*{tittle ,columns, rows, deleteRow, updateRow, table  */}
      <div className="p-6 bg-[#F4F7FE] min-h-dvh flex flex-col gap-8">
        <DataGrid
        title={"Lista de Proveedores"}
        columns={columns}
        rows={providers}
        deleteRow={deleteProvider}
        updateRow={navigateForm}
        loading={loading}
        />
      </div>
    </>
  );
};

export default Proveedores;