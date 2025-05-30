import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { AuthProvider } from "./context/authContext";
import AppRoutes from "./routes/AppRoutes";

function App() {


  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
