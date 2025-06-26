import React from "react";
import { useForm } from "react-hook-form";

const RegisterCheckOut = ({ idCartProduct, total, onSubmit, onClose, refreshCart }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            paymentMethod: "",
            status: "En proceso",
            email: "",
            address: "",
            total,
            date: new Date().toISOString().slice(0, 10),
        },
    });

    const submitHandler = async (data) => {
        console.log("Datos enviados al crear orden:", data);

        // Llamar función para crear orden (en el padre)
        await onSubmit({ ...data, idCartProduct });

        // Cerrar modal
        if (onClose) onClose();

        // Actualizar carrito
        if (refreshCart) refreshCart();
    };

    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>

            <label className="block mb-2 font-medium">Método de pago</label>
            <select
                {...register("paymentMethod", { required: "Selecciona un método de pago" })}
                className={`w-full p-2 mb-4 border rounded ${errors.paymentMethod ? "border-red-500" : "border-gray-300"}`}
            >
                <option value="">Selecciona un método</option>
                <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                <option value="PayPal">PayPal</option>
                <option value="Efectivo">Efectivo</option>
            </select>
            {errors.paymentMethod && (
                <p className="text-red-500 text-sm mb-4">{errors.paymentMethod.message}</p>
            )}

            {/* Estado oculto */}
            <input type="hidden" value="En proceso" {...register("status")} />

            <label className="block mb-2 font-medium">Correo electrónico</label>
            <input
                type="email"
                {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                        value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/,
                        message: "Correo inválido",
                    },
                })}
                className={`w-full p-2 mb-4 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && (
                <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
            )}

            <label className="block mb-2 font-medium">Dirección</label>
            <textarea
                {...register("address", { required: "La dirección es obligatoria" })}
                className={`w-full p-2 mb-4 border rounded ${errors.address ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.address && (
                <p className="text-red-500 text-sm mb-4">{errors.address.message}</p>
            )}

            <label className="block mb-2 font-medium">Total</label>
            <input
                type="number"
                {...register("total")}
                value={total}
                readOnly
                className="w-full p-2 mb-4 border rounded bg-gray-100 cursor-not-allowed"
            />

            <label className="block mb-2 font-medium">Fecha</label>
            <input
                type="date"
                {...register("date")}
                value={new Date().toISOString().slice(0, 10)}
                readOnly
                className="w-full p-2 mb-6 border rounded bg-gray-100 cursor-not-allowed"
            />

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
                Confirmar Pedido
            </button>
        </form>
    );
};

export default RegisterCheckOut;
