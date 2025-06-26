export const requireRole = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user?.role) {
      return res.status(403).json({ message: "No role detected in token" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied for this role" });
    }

    next();
  };
};
