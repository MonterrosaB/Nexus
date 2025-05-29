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
            {/*{ title, columns, rows, deleteRow, updateRow, loading } */}
            <DataGrid
                title={"Productos"}
                columns={columns}
                rows={products}
                deleteRow={deleteProduct}
                updateRow={navigateForm}
                loading={loading}
            />
        </>
    )
}
export default Productos;