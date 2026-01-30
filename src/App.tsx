import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

// Placeholder components for routes
const Home = () => <div className="flex items-center justify-center min-h-[60vh] text-3xl font-bold text-primary-500">Home Page</div>;
const About = () => <div className="flex items-center justify-center min-h-[60vh] text-3xl font-bold text-primary-500">About Us</div>;
const Services = () => <div className="flex items-center justify-center min-h-[60vh] text-3xl font-bold text-primary-500">Services</div>;
const Contact = () => <div className="flex items-center justify-center min-h-[60vh] text-3xl font-bold text-primary-500">Contact Us</div>;
const PrivacyPolicy = () => <div className="flex items-center justify-center min-h-[60vh] text-3xl font-bold text-primary-500">Privacy Policy</div>;
const NotFound = () => <div className="flex items-center justify-center min-h-[60vh] text-3xl font-bold text-primary-500">404 - Page Not Found</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}