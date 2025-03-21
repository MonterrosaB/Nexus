const categoriesController = {};

import categoriesModel from "../models/categoriesModel.js";

//SELECT
categoriesController.getCategory = async (req, res) => {
    const categories = await categoriesModel.find()
    res.json(categories)
}

//INSERT
categoriesController.createCategory = async (req, res) => {
    const {name} = req.body;
    
    const newcategories = new categoriesModel({name});
    await newcategories.save()
    res.json({message : "categories saved"})
}

//DELETE
categoriesController.deleteCategory = async (req, res) => {
    await categoriesModel.findOneAndDelete(req.params.id)
    res.json({message : "categories delete"})
}

//UPDATE
categoriesController.updateCategory = async (req, res) => {
    const {name} = req.body;

    await categoriesModel.findByIdAndUpdate(req.params.id, {
            name,
        },{new : true}
    );
    res.json({ message : "categories updated"})
}

export default categoriesController;