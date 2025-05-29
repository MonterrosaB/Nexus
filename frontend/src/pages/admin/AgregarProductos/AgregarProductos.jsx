import Reminder from "../../../components/Reminder";
import Input from "../../../components/Input";
import DropDown from "../../../components/DropDown";
import useProducts from "../../../context/productContext";
import ImagePlaceholder from "../../../assets/image.webp";
import { useGetData } from "./GetData.jsx";

const AgregarProductos = () => {
  const {
    products,
    loading,
    productName,
    setProductName,
    productDescription,
    setProductDescription,
    productPrice,
    setProductPrice,
    productStock,
    setProductStock,
    idcategory,
    setCategory,
    idbrand,
    setBrand,
    idprovider,
    setProvider,
    imageFile,
    setImageFile,
    productImage,
    setProductImage,
    id,
    setId,
    createProducts, // para AgregarProductos.jsx
    getProducts: fetchProductos, // para recargar productos
    deleteProduct,
    updateProduct,
    handleEdit,
    onImageChange,
    clearForm,
  } = useProducts();

  const { categories, brands, providers } = useGetData();

  const data = {
    first:
      "Se debe llenar todos los campos; de lo contrario, aparecerá un error indicando el/los campos.",
    second:
      "Para poder agregar productos se debe agregar los siguientes datos:",
    subOne: "- Al menos una categoría",
    subTwo: "- Al menos un proveedor",
    third: "Los precios deben ser mayores a 0",
  };

  const categoryOptions = categories.map(cat => ({
  value: cat.id || cat._id,
  label: cat.nombre || cat.name,
}));

const brandOptions = brands.map(brand => ({
  value: brand.id || brand._id,
  label: brand.nombre || brand.name,
}));

const providerOptions = providers.map(prov => ({
  value: prov.id || prov._id,
  label: prov.primerNombre || prov.firstName,
}));

  return (
    <div className="p-6 bg-[#F4F7FE] min-h-dvh flex flex-col gap-8">
      <Reminder
        firstOne={data.first}
        secondOne={data.second}
        subOne={data.subOne}
        subTwo={data.subTwo}
        thirdOne={data.third}
      />

      <form>
        <div>
          <h2 className="font-bold text-3xl text-[#2B3674] pb-3">Producto</h2>

          <Input
            label="Nombre del producto"
            id="producto"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <Input
            label="Descripción"
            id="descripcion"
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />

          <div className="flex justify-center items-center gap-4">
            <DropDown
              id="categoria"
              label="Categoría"
              options={categories.map((category) => ({
                value: category._id,
                label: category.name,
              }))}
              value={idcategory}
              onChange={(e) => setCategory(e.target.value)}
            />
            <DropDown
              id="marca"
              label="Marca"
              options={brands.map((brand) => ({
                value: brand._id,
                label: brand.name,
              }))}
              value={idbrand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <DropDown
              id="provider"
              label="Proveedor"
              options={providers.map((proveedor) => ({
                value: proveedor._id,
                label: proveedor.firstName,
              }))}
              value={idprovider}
              onChange={(e) => setProvider(e.target.value)}
            />
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <Input
              label="Stock"
              id="stock"
              type="number"
              value={productStock}
              onChange={(e) => setProductStock(e.target.value)}
            />
            <Input
              label="Precio"
              id="precio"
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center flex-col bg-[#FFF] p-8 gap-8 rounded-md shadow-md w-lg mt-6">
            <img
              src={productImage ? productImage : ImagePlaceholder}
              alt="Vista previa"
              className="h-40 object-cover rounded"
            />
            <label className="bg-[#DFEAF6] w-full p-2.5 rounded-lg font-medium cursor-pointer mx-auto flex items-center justify-center">
              <span>Agrega una imagen</span>
              <input
                type="file"
                name="image"
                className="hidden"
                onChange={onImageChange}
                accept="image/*"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={createProducts}
            className="bg-[#DFEAF6] w-full p-2.5 rounded-lg font-medium cursor-pointer hover:bg-[#cbdcec] transition-colors mt-4"
          >
            {!id ? "Agregar Producto" : "Editar Producto"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarProductos;
