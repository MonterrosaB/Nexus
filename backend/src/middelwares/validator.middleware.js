export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    console.error("Error de validación:", error.errors);
    return res.status(400).json({
      message: "Validation error",
      errors: error.errors.map(err => err.message),
    });
  }
};
