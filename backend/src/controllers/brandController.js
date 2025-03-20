const brandController = {};

import brandModel from "../models/brandModel.js";

//SELECT
brandController.getBrands = async (req, res) => {
    const brands = await brandModel.find()
    res.json(brands)
}

//INSERT
brandController.createBrand = async (req, res) => {
    const {name} = req.body;
    
    const newBrand = new brandModel({name});
    await newBrand.save()
    res.json({message : "brand saved"})
}

//DELETE
brandController.deleteBrand = async (req, res) => {
    await brandModel.findOneAndDelete(req.params.id)
    res.json({message : "brand delete"})
}

//UPDATE
brandController.updateBrand = async (req, res) => {
    const {name} = req.body;

    await brandModel.findByIdAndUpdate(req.params.id, {
            name,
        },{new : true}
    );
    res.json({ message : "brand updated"})
}

export default brandController;