const customerController = {};

import customerModel from "../models/customerModel.js";
import userController from "./userController.js";

//SELECT
customerController.getCustomers = async (req, res) => {
    const customers = await customerModel.find()
    res.json(customers)
}

//INSERT

//INSERT
customerController.createCustomer = async (req, res) => {
    const{firstName, lastName, email, username, password, phoneNumber, birthDate, sex, status, isVerified} = req.body;
    
    const newCustomer = new customerModel({firstName, lastName, email, username, password, phoneNumber, birthDate, sex, status, isVerified});
    await newCustomer.save()
    res.json({message : "customer saved"})
}

//DELETE

customerController.deleteCustomer = async (req, res) => {
    await customerModel.findOneAndDelete(req.params.id)
    res.json({message : "customer delete"})
}

//UPDATE
customerController.updateCustomer = async (req, res) => {
    const {firstName, 
        lastName, 
        email, 
        username, 
        password, 
        phoneNumber, 
        birthDate, 
        sex, 
        status, 
        isVerified} = req.body;

    await customerModel.findByIdAndUpdate(req.params.id, {
        firstName, 
        lastName, 
        email, 
        username, 
        password, 
        phoneNumber, 
        birthDate, 
        sex, 
        status, 
        isVerified,
        },{new : true}
    );
    res.json({ message : "customer updated"})
}

export default customerController;