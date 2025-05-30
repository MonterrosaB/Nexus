import Reminder from "../../../components/Reminder";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Image from "../../../assets/image.webp"
import DropDown from "../../../components/DropDown";

import { useGetData } from "./GetData";
import useDataProductos from "../../../components/hooks/useDataProductos";

import { useEffect } from "react";
import { useLocation } from 'react-router';

const AgregarProductos = () => {

  const location = useLocation();
  const product = location.state?.product;

  const {
    products, loading,
    productName, setProductName,
    productDescription, setProductDescription,
    productImage, setProductImage,
    productImageFile, setProductImageFile,
    prodcutCategory, setProductCategory,
    productBrand, setProductBrand,
    productProvider, setProductProvider,
    productStock, setProductStock,
    productUnitPrice, setProductUnitPrice,
    id, setId,
    saveProduct,
    handleUpdate, onImageChange
  } = useDataProductos();

  useEffect(() => {
    if (product) {
      setId(product._id);
      setProductName(product.name);
      setProductDescription(product.description);
      setProductImage(product.images);
      setProductCategory(product.idCategory);
      setProductBrand(product.idBrand);
      setProductProvider(product.idProvider);
      setProductStock(product.stock);
      setProductUnitPrice(product.unitPrice);
    }
  }, [product]);

  const data = {
    first: "Se debe llenar todos los campos; de lo contrario, aparecerá un error indicando el/los campos.",
    second: "Para poder agregar productos se debe agregar los siguientes datos:",
    subOne: "- Al menos una categoría",
    subTwo: "- Al menos un proveedor",
    third: "Los precios deben ser mayores a 0"
  };

  const { categories, brands, providers } = useGetData();

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
          <div>
            <h2 className="font-bold text-3xl text-[#2B3674] pb-3">Producto</h2>

            <Input
              label={"Nombre del producto"}
              id={"producto"}
              type={"text"}
              onChange={(e) => setProductName(e.target.value)}
              value={productName} />
            <Input
              label={"descripción"}
              id={"descripcion"}
              type={"text"}
              onChange={(e) => setProductDescription(e.target.value)}
              value={productDescription}
            />
            <div className="flex justify-center items-center gap-4">
              {/*DROPDOWNS*/}
              <DropDown
                id="proveedor"
                label="Proveedor"
                options={providers}
                onChange={(e) => setProductProvider(e.target.value)}
                value={productProvider}
              />
              <DropDown
                id="brands"
                label="Marcas"
                options={brands}
                onChange={(e) => setProductBrand(e.target.value)}
                value={productBrand}
              />
              <DropDown
                id="categories"
                label="Categoría"
                options={categories}
                onChange={(e) => setProductCategory(e.target.value)}
                value={prodcutCategory}
              />
            </div>
            <div className="flex justify-center gap-2">
              <Input
                label={"stock"}
                id={"stock"}
                type={"number"}
                onChange={(e) => setProductStock(e.target.value)}
                value={productStock}
              />
              <Input
                label={"precio"}
                id={"precio"}
                type={"number"}
                onChange={(e) => setProductUnitPrice(e.target.value)}
                value={productUnitPrice} />
            </div>
            {!id ? (
              <Button
                text={"Agregar Producto"}
                onClick={saveProduct}
              />
            ) : (
              <Button
                text={"Actualizar Producto"}
                onClick={handleUpdate}
              />
            )}
          </div>
          <div className="flex items-center justify-center flex-col bg-[#FFF] p-8 gap-8 rounded-md shadow-md w-lg">
            {productImage ? (
              <img src={productImage} alt="Vista previa" className="w-48 h-48 object-contain" />
            ) : (
              <img src={Image} alt="Imagen por defecto" className="w-48 h-48 object-contain" />
            )}

            <label
              htmlFor="product-image-upload"
              className="bg-[#DFEAF6] w-full p-2.5 rounded-lg font-medium cursor-pointer mx-auto flex items-center justify-center"
            >
              <span>Agrega una imagen</span>
              <input
                type="file"
                id="product-image-upload"
                className="hidden"
                onChange={onImageChange}
              />
            </label>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AgregarProductos;