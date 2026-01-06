import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Comopnents/Navbar";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Enquiry from "./Pages/Enquiry";
import AdminEnquiries from "./admin/admin";
import EnrollmentForm from "./Pages/Enrol";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/admin" element={<AdminEnquiries />} />
        <Route path="/enrol" element={<EnrollmentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
