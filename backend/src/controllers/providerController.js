const providerController = {};

import providerModel from "../models/providerModel.js";

//SELECT
providerController.getProvider = async (req, res) => {
    const providers = await providerModel.find()
    res.json(providers)
}

//INSERT
providerController.createProvider = async (req, res) => {
    const {firstName, lastName, company, email, phoneNumber} = req.body;
    
    const newProvider = new providerModel({firstName, lastName, company, email, phoneNumber});
    await newProvider.save()
    res.json({message : "provider saved"})
}

//DELETE
providerController.deleteProvider = async (req, res) => {
    await providerModel.findOneAndDelete(req.params.id)
    res.json({message : "provider delete"})
}

//UPDATE
providerController.updateProvider = async (req, res) => {
    const {firstName, lastName, company, email, phoneNumber} = req.body;

    await providerModel.findByIdAndUpdate(req.params.id, {
        firstName, lastName, company, email, phoneNumber,
        },{new : true}
    );
    res.json({ message : "provider updated"})
}

export default providerController;