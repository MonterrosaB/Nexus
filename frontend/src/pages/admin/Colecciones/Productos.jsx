import DataGrid from "../../../components/DataGrid"
import useDataProductos from "../../../components/hooks/useDataProductos";

const Productos = () => {

    const columns = {
        "Producto": "name",
        "Descripción": "description",
        "Categoría": "idCategory.name",
        "Marca": "idBrand.name",
        "Proveedor": "idProvider.company",
        "Stock": "stock",
        "Precio/u": "unitPrice"
    };

    const {
        products,
        loading,
        deleteProduct, navigateForm
    } = useDataProductos();

    return (
        <>
            <div className="p-6 bg-[#F4F7FE] min-h-dvh flex flex-col gap-8">
                {/*{ title, columns, rows, deleteRow, updateRow, loading } */}
                <DataGrid
                    title={"Productos"}
                    columns={columns}
                    rows={products}
                    deleteRow={deleteProduct}
                    updateRow={navigateForm}
                    loading={loading}
                />
            </div>
        </>
    )
}
export default Productos;