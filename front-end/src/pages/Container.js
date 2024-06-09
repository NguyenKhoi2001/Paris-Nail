import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Homepage from "./Homepage";
import Footer from "../components/Footer";
// import ServicePage from "./ServicePage";
import GalleryPage from "./GalleryPage";
import { useLocation } from "react-router-dom";
import AppointmentPage from "./AppointmentPage";
// import ServicePage from "./ServicePage";
import RedirectToExternalLink from "./RedirectToExternalLink";

const Container = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div className="container">
      <Navbar isHomepage={isHomepage} />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<RedirectToExternalLink />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/appointments" element={<AppointmentPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Container;
