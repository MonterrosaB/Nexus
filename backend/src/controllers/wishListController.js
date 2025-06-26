import wishListModel from "../models/wishListModel.js";
import productModel from "../models/productModel.js";
const wishListController = {};

wishListController.getWishList = async (req, res) => {
  try {
    const wishList = await wishListModel
      .findOne({ idCustomer: req.user.id })
      .populate({
        path: "products.idProduct",
        populate: [
          { path: "idBrand", select: "name" },
          { path: "idCategory", select: "name" },
        ],
      });

    res.json(wishList);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ message: "Error fetching wishlist" });
  }
};

wishListController.toggleItems = async (req, res) => {
  const { idProduct } = req.params;

  try {
    let wishList = await wishListModel.findOne({
      idCustomer: req.user.id,
    });

    if (!wishList) {
      wishList = new wishListModel({
        idCustomer: req.user.id,
        products: [],
      });
    }

    const productDB = await productModel.findById(idProduct);
    if (!productDB)
      return res.status(404).json({ message: "Producto no encontrado" });

    const itemIndex = wishList.products.findIndex(
      (prod) => prod.idProduct.toString() === idProduct
    );

    if (itemIndex !== -1) {
      wishList.products.splice(itemIndex, 1);
    } else {
      wishList.products.push({
        idProduct: productDB._id,
        dateAdded: new Date(),
      });
    }

    await wishList.save();

    const populatedWishList = await wishListModel
      .findOne({ idCustomer: req.user.id })
      .populate({
        path: "products.idProduct",
        populate: [
          { path: "idBrand", select: "name" },
          { path: "idCategory", select: "name" },
        ],
      });

    res.status(200).json(populatedWishList);
  } catch (error) {
    console.error("Error al modificar la lista de deseos:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

export default wishListController;
