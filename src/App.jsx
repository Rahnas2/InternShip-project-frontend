import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import AbountUs from "./pages/AbountUs"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"
import Footer from "./components/common/Footer"
import Navbar from "./components/common/Navbar"
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className="bg-transparent">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AbountUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
