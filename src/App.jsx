import { Route, Routes } from "react-router-dom"
import Homepage from "./assets/pages/Homepage"
import Dashboard from "./assets/pages/Dashboard"
import Login from "./assets/pages/Login"
import Register from "./assets/pages/Register"
import ContactUs from "./assets/pages/Contact Us"
import AboutUs from "./assets/pages/About Us"
import Profile from "./assets/components/Profile"
import Editprofile from "./assets/components/Editprofile"
import Table from "./assets/components/Table"
import Analytics from "./assets/components/Analytics"

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Contact us" element={<ContactUs />} />
        <Route path="/About Us" element={<AboutUs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Editprofile" element={<Editprofile />} />
      </Routes>
    </>
  )
}

export default App
