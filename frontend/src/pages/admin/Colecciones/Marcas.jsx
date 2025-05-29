import DataGrid from "../../../components/DataGrid"
import useDataMarcas from "../../../components/hooks/useDataMarcas";

const Marcas = () => {

    const columns = {
        "Marca": "name"
    };

    const {
        brands,
        loading,
        deleteBrand, navigateForm
    } = useDataMarcas();

    return (
        <>
            {/*{ title, columns, rows, deleteRow, updateRow, loading } */}
            <div className="p-6 bg-[#F4F7FE] min-h-dvh flex flex-col gap-8">
                <DataGrid
                    title={"Marcas"}
                    columns={columns}
                    rows={brands}
                    deleteRow={deleteBrand}
                    updateRow={navigateForm}
                    loading={loading}
                />
            </div>
        </>
    )
}
export default Marcas;