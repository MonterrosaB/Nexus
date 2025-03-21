import Orders from "../models/orderModel.js";

const ordersController = {};

ordersController.getOrder = async (req, res) => {

    const orders = await Orders
   .find().populate('idCartProduct')


    res.json(orders)
}                   


//insert 


ordersController.createOrder = async (req, res) => {

    const {paymentMethod, status, address, total, date, idCartProduct} = req.body;
    
    const newOrder = new Orders({paymentMethod, status, address, total, date, idCartProduct});

    await newOrder.save()

    res.json({message: "order saved"});
}
 


ordersController.deleteOrder = async (req, res) => {

    await Orders.findOneAndDelete(req.params.id)
}

ordersController.updateOrder = async (req,res) => {

    const {paymentMethod, status, address, total, date, idCartProduct} = req.body;

    await Orders.findByIdAndUpdate(req.params.id, {paymentMethod, status, address, total, date, idCartProduct}, {new: true});

    res.json({message: "order updated "})
}

export default ordersController;