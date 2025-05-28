import DataGrid from "../../../components/DataGrid";
import useDataUsuarios from "../../../components/hooks/useDataUsuarios";

const Usuarios = () =>{

    const { loading, users } =
    useDataUsuarios();

    const columns = {
        "DUI": "dui",
        "Nombre": "firstName",
        "Apellido": "lastName",
        "Rol": "role",
        "Correo": "email",
        "Usuario": "username",
        "Teléfono": "phoneNumber",
        "Fecha de Nacimiento": "birthDate",
        "Sexo": "sex",
        "Estado": "status",
      };

      const formattedUsers = users.map(user => ({
        ...user,
        status: user.status ? "Activo" : "Inactivo",
      }));

    return(
        <>
        {/*{tittle ,columns, rows, deleteRow, updateRow, table  */}
      <div className="p-6 bg-[#F4F7FE] min-h-dvh flex flex-col gap-8">
        <DataGrid
        title={"Lista de Usuarios"}
        columns={columns}
        rows={formattedUsers}
        deleteRow={"deleteProvider"}
        updateRow={"navigateForm"}
        loading={loading}
        />
      </div>
        </>
    )
}
export default Usuarios;