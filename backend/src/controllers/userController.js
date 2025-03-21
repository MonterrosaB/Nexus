import userModel from "../models/userModel.js";

const userController = {};


//SELECT
userController.getUser = async (req, res) => {
    const user = await Products.find();
    res.json(products)
}   

//INSERT
userController.createUser = async (req, res) => {
    const {dui, firstName, lastName, role, email, username, password, phoneNumber, birthDate, sex, status, isVerified} = req.body;
    
    const newUser = new userModel({dui, firstName, lastName, role, email, username, password, phoneNumber, birthDate, sex, status, isVerified});
    await newUser.save()
    res.json({message : "user saved"})
}

//DELETE
userController.deleteUser = async (req, res) => {
    await userModel.findOneAndDelete(req.params.id)
    res.json({message : "user delete"})
}

//UPDATE
userController.updateUser = async (req, res) => {
    const {dui, firstName, lastName, role, email, username, password, phoneNumber, birthDate, sex, status, isVerified} = req.body;

    await userModel.findByIdAndUpdate(req.params.id, {
        dui, firstName, lastName, role, email, username, password, phoneNumber, birthDate, sex, status, isVerified
    },{new : true}
    );
    res.json({ message : "user updated"})
}

export default userController;