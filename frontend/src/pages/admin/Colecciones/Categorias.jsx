import DataGrid from "../../../components/DataGrid"
import useDataCategorias from "../../../components/hooks/useDataCategorias";

const Marcas = () => {

    const columns = {
        "Categoría": "name"
    };

    const {
        categories,
        loading,
        deleteCategory, navigateForm
    } = useDataCategorias();

    return (
        <>
            {/*{ title, columns, rows, deleteRow, updateRow, loading } */}
            <div className="p-6 bg-[#F4F7FE] min-h-dvh flex flex-col gap-8">
                <DataGrid
                    title={"Marcas"}
                    columns={columns}
                    rows={categories}
                    deleteRow={deleteCategory}
                    updateRow={navigateForm}
                    loading={loading}
                />
            </div>
        </>
    )
}
export default Marcas;