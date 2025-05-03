import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import FeaturesPage from "./Pages/FeaturesPage";
import ShopPage from "./Pages/ShopPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/feature' element={<FeaturesPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/testimonial' element={<TestimonialsPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/404' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
