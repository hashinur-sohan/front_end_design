"use client";
// components/Layout.js
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
  <Header />
  <div className="max-w-7xl mx-auto p-5">
    {children}
  </div>
  <Footer />
  </>
);

export default Layout;