import './App.css'
import Navbar from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router";


function App() {

  return (
    <>
<Router>
      <Navbar />
      <Routes>
      <Route path="/dragon" />
      <Route path="/ricknmorty"/>
      </Routes>
      </Router>


    </>
  )
}

export default App
