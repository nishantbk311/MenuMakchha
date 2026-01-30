import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Services from "../pages/Services";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import NotFound from "../ErrorHandling/NotFound";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}