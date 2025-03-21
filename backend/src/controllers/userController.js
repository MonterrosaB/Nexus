import userModel from "../models/userModel.js";

const userController = {};


//SELECT
userController.getUser = async (req, res) => {
    const users = await userModel.find();
    res.json(users)
}   

//INSERT
userController.createUser = async (req, res) => {
    const {dui, firstName, lastName, role, email, username, password, phoneNumber, birthDate, sex, status} = req.body;
    
    const newUser = new userModel({dui, firstName, lastName, role, email, username, password, phoneNumber, birthDate, sex, status});
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
    const {dui, firstName, lastName, role, email, username, password, phoneNumber, birthDate, sex, status} = req.body;

    await userModel.findByIdAndUpdate(req.params.id, {
        dui, firstName, lastName, role, email, username, password, phoneNumber, birthDate, sex, status
    },{new : true}
    );
    res.json({ message : "user updated"})
}

export default userController;