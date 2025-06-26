import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { AuthProviderAdmin } from "./context/authContextAdmin";
import { AuthCustomerProvider } from "./context/authContextPublic";
import AppRoutes from "./routes/AppRoutes";

function App() {


  return (
    <AuthCustomerProvider>
      <AuthProviderAdmin>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProviderAdmin>
    </AuthCustomerProvider>
  );
}

export default App;
