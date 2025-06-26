import Orders from "../models/orderModel.js";
import cartProductsModel from "../models/cartProductsModel.js";

const ordersController = {};

ordersController.getOrder = async (req, res) => {
  try {
    // Buscar todos los carritos del cliente
    const carts = await cartProductsModel.find({ idCustomer: req.user.id });
    const cartIds = carts.map((c) => c._id);

    // Buscar órdenes cuyo idCartProduct esté en los carritos del cliente
    const orders = await Orders.find({
      idCartProduct: { $in: cartIds },
    }).populate({
      path: "idCartProduct",
      populate: [
        {
          path: "products.idProduct",
          populate: [
            { path: "idBrand", select: "name" },
            { path: "idCategory", select: "name" },
          ],
        },
      ],
    });

    res.json(orders);
  } catch (error) {
    console.error("Error al obtener órdenes:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

//insert
ordersController.createOrder = async (req, res) => {
  const { email, paymentMethod, status, address, total, date, idCartProduct } =
    req.body;

  try {
    // Obtener el carrito actual ANTES de marcarlo como completado
    const currentCart = await cartProductsModel.findById(idCartProduct);
    if (!currentCart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    // Crear la orden
    const newOrder = new Orders({
      email,
      paymentMethod,
      status,
      address,
      total,
      date,
      idCartProduct,
    });

    await newOrder.save();

    // Marcar el carrito actual como completado
    currentCart.status = "completed";
    await currentCart.save();

    // Crear un nuevo carrito activo para el mismo cliente
    const newCart = new cartProductsModel({
      idCustomer: currentCart.idCustomer,
      products: [],
      status: "active",
    });

    await newCart.save();

    res.status(201).json({ message: "Orden guardada y nuevo carrito creado" });
  } catch (err) {
    console.error("Error al crear la orden:", err);
    res.status(500).json({ message: "Error interno al procesar la orden" });
  }
};

ordersController.deleteOrder = async (req, res) => {
  await Orders.findOneAndDelete(req.params.id);
};

ordersController.updateOrder = async (req, res) => {
  const { paymentMethod, status, address, total, date, idCartProduct } =
    req.body;

  await Orders.findByIdAndUpdate(
    req.params.id,
    { paymentMethod, status, address, total, date, idCartProduct },
    { new: true }
  );

  res.json({ message: "order updated " });
};

export default ordersController;
