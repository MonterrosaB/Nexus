import Products from "../models/productModel.js";

const productsController = {};

productsController.getProduct = async (req, res) => {

    const products = await Products
   .find()
   .populate('idCategory')
    .populate('idBrand')
    .populate('idProvider');

    res.json(products)
}                   


//insert 


productsController.createProduct = async (req, res) => {

    const {name, description, images, idCategory, idBrand, idProvider, stock, unitPrice} = req.body;
    
    const newProduct = new Products({name, description, images, idCategory, idBrand, idProvider, stock, unitPrice});

    await newProduct.save()

    res.json({message: "product saved"});
}
 


productsController.deleteProduct = async (req, res) => {

    await Products.findOneAndDelete(req.params.id)
}

productsController.updateProduct = async (req,res) => {

    const {name, description, images, idCategory, idBrand, idProvider, stock, unitPrice} = req.body;

    await Products.findByIdAndUpdate(req.params.id, {name, description, images, idCategory, idBrand, idProvider, stock, unitPrice}, {new: true});

    res.json({message: "product updated "})
}

export default productsController;