const cartProductController = {};

import cartProductModel from "../models/cartProductsModel.js";

//SELECT
cartProductController.getcartProducts = async (req, res) => {
    const cartProducts = await cartProductModel.find()
    res.json(cartProducts)
}

//INSERT
cartProductController.createCartProdcut = async (req, res) => {
    const {idCustomer, products} = req.body;
    
    const newCartProduct = new cartProductModel({idCustomer, products});
    await newCartProduct.save()
    res.json({message : "cart product saved"})
}

//DELETE
cartProductController.deleteCartProduct = async (req, res) => {
    await cartProductModel.findOneAndDelete(req.params.id)
    res.json({message : "cart product delete"})
}

//UPDATE
cartProductController.updateCartProduct = async (req, res) => {
    const {idCustomer, products } = req.body;

    await cartProductModel.findByIdAndUpdate(req.params.id, {
        idCustomer,
        products
        },{new : true}
    );
    res.json({ message : "cart product updated"})
}

export default cartProductController;