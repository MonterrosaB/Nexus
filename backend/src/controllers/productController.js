import Products from "../models/productModel.js";

import { config } from "../config.js";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: config.CLOUDINARY.cloudinary_name,
  api_key: config.CLOUDINARY.cloudinary_api_key,
  api_secret: config.CLOUDINARY.cloudinary_api_secret,
});

const productsController = {};

productsController.getProducts = async (req, res) => {
  const products = await Products.find()
    .populate("idCategory", "name")
    .populate("idBrand", "name")
    .populate("idProvider", "company");

  res.json(products);
};

productsController.getProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id)
      .populate("idCategory")
      .populate("idBrand")
      .populate("idProvider");

    if (!product)
      return res.status(404).json({ message: "Producto no encontrado" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error });
  }
};

//insert

productsController.createProduct = async (req, res) => {
  const {
    name,
    description,
    idCategory,
    idBrand,
    idProvider,
    stock,
    unitPrice,
  } = req.body;

  let imageURL = "";

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "public",
      allowed_formats: ["png", "jpg", "jpeg"],
    });

    imageURL = result.secure_url;
  }

    if (!idCategory || !mongoose.Types.ObjectId.isValid(idCategory)) {
    return res.status(400).json({ error: "Categoría inválida" });
  }

  if (!idBrand || !mongoose.Types.ObjectId.isValid(idBrand)) {
    return res.status(400).json({ error: "Marca inválida" });
  }

  if (!idProvider || !mongoose.Types.ObjectId.isValid(idProvider)) {
    return res.status(400).json({ error: "Proveedor inválido" });
  }

  const newProduct = new Products({
    name,
    description,
    images: imageURL,
    idCategory,
    idBrand,
    idProvider,
    stock,
    unitPrice,
  });


  newProduct.save();

  res.json({ message: "product saved" });
};

productsController.deleteProduct = async (req, res) => {
  await Products.findOneAndDelete(req.params.id);
};

productsController.updateProduct = async (req, res) => {
  const {
    name,
    description,
    images,
    idCategory,
    idBrand,
    idProvider,
    stock,
    unitPrice,
  } = req.body;

  await Products.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      images,
      idCategory,
      idBrand,
      idProvider,
      stock,
      unitPrice,
    },
    { new: true }
  );

  res.json({ message: "product updated " });
};

export default productsController;
