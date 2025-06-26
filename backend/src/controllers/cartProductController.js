const cartProductController = {};

import cartProductModel from "../models/cartProductsModel.js";
import productModel from "../models/productModel.js";

//SELECT
cartProductController.getcartProducts = async (req, res) => {
  try {
    const userId = (req.user.id);

    let cartProducts = await cartProductModel
      .findOne({ idCustomer: userId, status: "active" })
      .populate({
        path: "products.idProduct",
        populate: [
          { path: "idBrand", select: "name" },
          { path: "idCategory", select: "name" },
        ],
      });

    if (!cartProducts) {
      // Crear nuevo carrito vacío para este cliente
      cartProducts = new cartProductModel({
        idCustomer: userId,
        products: [],
        status: "active",
      });
      await cartProducts.save();
      // Volver a popular para respuesta consistente
      cartProducts = await cartProductModel
        .findById(cartProducts._id)
        .populate({
          path: "products.idProduct",
          populate: [
            { path: "idBrand", select: "name" },
            { path: "idCategory", select: "name" },
          ],
        });
    }

    res.json(cartProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

//INSERT
cartProductController.createCartProdcut = async (req, res) => {
  const { idCustomer, products } = req.body;

  const newCartProduct = new cartProductModel({ idCustomer, products });
  await newCartProduct.save();
  res.json({ message: "cart product saved" });
};

//DELETE
cartProductController.deleteCartProduct = async (req, res) => {
  await cartProductModel.findByIdAndDelete(req.params.id);
  res.json({ message: "cart product delete" });
};

//UPDATE
cartProductController.increaseProduct = async (req, res) => {
  const { idCartProduct, idProduct } = req.params;

  try {
    const cart = await cartProductModel.findById(idCartProduct);
    if (!cart)
      return res.status(404).json({ message: "Carrito no encontrado" });

    const productDB = await productModel.findById(idProduct);
    if (!productDB)
      return res.status(404).json({ message: "Producto no encontrado" });

    const item = cart.products.find(
      (p) => p.idProduct.toString() === idProduct
    );

    if (item) {
      item.quantity += 1;
      item.subtotal = item.quantity * productDB.unitPrice;
    } else {
      cart.products.push({
        idProduct,
        quantity: 1,
        subtotal: productDB.unitPrice,
      });
    }

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error al aumentar cantidad:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

cartProductController.decreaseProduct = async (req, res) => {
  const { idCartProduct, idProduct } = req.params;

  try {
    const cart = await cartProductModel.findById(idCartProduct);
    if (!cart)
      return res.status(404).json({ message: "Carrito no encontrado" });

    const productDB = await productModel.findById(idProduct);
    if (!productDB)
      return res.status(404).json({ message: "Producto no encontrado" });

    const item = cart.products.find(
      (p) => p.idProduct.toString() === idProduct
    );

    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.subtotal = item.quantity * productDB.unitPrice;
      } else {
        // Si solo queda 1, lo eliminamos del array
        cart.products = cart.products.filter(
          (p) => p.idProduct.toString() !== idProduct
        );
      }
    } else {
      return res
        .status(404)
        .json({ message: "Producto no encontrado en el carrito" });
    }

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error al disminuir cantidad:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

cartProductController.addProduct = async (req, res) => {
  const { idProduct } = req.params;

  try {
    let cart = await cartProductModel.findOne({
      idCustomer: req.user.id,
      status: "active",
    });

    if (!cart) {
      cart = new cartProductModel({
        idCustomer: req.user.id,
        status: "active",
        products: [],
      });
    }

    const productDB = await productModel.findById(idProduct);
    if (!productDB)
      return res.status(404).json({ message: "Producto no encontrado" });

    const item = cart.products.find(
      (prod) => prod.idProduct.toString() === idProduct
    );

    if (item) {
      item.quantity += 1;
      item.subtotal = item.quantity * productDB.unitPrice;
    } else {
      cart.products.push({
        idProduct: productDB._id,
        name: productDB.name,
        unitPrice: productDB.unitPrice,
        quantity: 1,
        subtotal: productDB.unitPrice,
      });
    }

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error al agregar producto al carrito:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

export default cartProductController;
