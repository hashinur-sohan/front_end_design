"use client";
// components/Layout.js
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="max-w-7xl mx-auto p-5">{children}</div>
    <Footer />
  </>
);

export default Layout;
